import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";

const countryCodes = {
  in: "+91",
  us: "+1",
  ca: "+1",
  mx: "+52",
  gb: "+44",
  au: "+61",
  de: "+49",
  fr: "+33",
};

export default function Delivery() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    countryCode: "",
    contact: ""
  });
  const [errors, setErrors] = useState({});
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  useEffect(() => {
    fetchSavedAddresses();
  }, []);

  const fetchSavedAddresses = async () => {
    const token = getCookie('jwtToken');
    try {
      const response = await fetch('https://amrti-main-backend.vercel.app/api/v1/amrti/address/getAddress', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const addresses = await response.json();
        setSavedAddresses(addresses.addresses);
      }
    } catch (error) {
      console.error('Error fetching saved addresses:', error);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    let newValue = value;
    
    if (id === 'contact') {
      newValue = value.replace(/\D/g, '').slice(0, 10);
    }
    
    setFormData(prevData => ({
      ...prevData,
      [id]: newValue
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [id]: ''
    }));
  };

  const handleSelectChange = (id, value) => {
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [id]: ''
    }));

    if (id === 'country') {
      setFormData(prevData => ({
        ...prevData,
        countryCode: countryCodes[value] || ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    const zipRegex = /^\d{5,6}$/;

    if (!formData.name.trim() || !nameRegex.test(formData.name.trim())) {
      newErrors.name = 'Please enter a valid name (2-50 characters, letters only)';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }
    if (!formData.zip.trim() || !zipRegex.test(formData.zip.trim())) {
      newErrors.zip = 'Please enter a valid 5-6 digit zip code';
    }
    if (!formData.country) {
      newErrors.country = 'Please select a country';
    }
    if (!formData.countryCode) {
      newErrors.countryCode = 'Please select a country code';
    }
    if (!formData.contact || formData.contact.length !== 10) {
      newErrors.contact = 'Please enter a valid 10-digit contact number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const token = getCookie('jwtToken');
      
      try {
        // Save address
        const addressResponse = await fetch('https://amrti-main-backend.vercel.app/api/v1/amrti/address/createAddress', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        });

        const addressData = await addressResponse.json();
        if (addressResponse.ok) {
          fetchSavedAddresses();  // Refresh the list of saved addresses
          proceedToPayment(addressData.cartPrice);
        } else {
          setPaymentStatus('Failed to save delivery information');
        }
      } catch (error) {
        console.error('Error:', error);
        setPaymentStatus('An error occurred');
      }
    }
  };

  const proceedToPayment = async (amount,addressId) => {
    const token = getCookie('jwtToken');
    try {
      console.log(addressId)
      const paymentResponse = await fetch('https://amrti-main-backend.vercel.app/api/v1/amrti/payment/initiate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          amount: amount,
          addressId:addressId,
          redirectUrl: 'https://amrti-main-backend.vercel.app/api/v1/amrti/payment/verify/:merchantTransactionId',
        }),
      });

      if (paymentResponse.ok) {
        const paymentData = await paymentResponse.json();
        window.location.href = paymentData.redirectUrl;
      } else {
        setPaymentStatus('Failed to initiate payment');
      }
    } catch (error) {
      console.error('Error:', error);
      setPaymentStatus('An error occurred during payment initiation');
    }
  };

  const handleAddressSelection = (addressId) => {
    setSelectedAddressId(addressId);
  };

  const handleUseSelectedAddress = async () => {
    if (selectedAddressId) {
      try {
        console.log(selectedAddressId)
        const token = getCookie('jwtToken');
        const response = await fetch('https://amrti-main-backend.vercel.app/api/v1/amrti/address/getaddressid', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ addressId: selectedAddressId }),
        });

        if (response.ok) {
          const addressData = await response.json();
          console.log(addressData)
          proceedToPayment(addressData.cartPrice,selectedAddressId);
        } else {
          setPaymentStatus('Failed to fetch selected address');
        }
      } catch (error) {
        console.error('Error:', error);
        setPaymentStatus('An error occurred');
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="space-y-6 sm:space-y-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">Delivery Information</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Choose a saved address or add a new one to proceed with your order.
          </p>
        </div>

        {savedAddresses.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Saved Addresses</h2>
            <RadioGroup onValueChange={handleAddressSelection} className="space-y-2">
              {savedAddresses.map((address, index) => (
                <div key={index} className="flex items-center space-x-2 p-2 border rounded">
                  <RadioGroupItem value={address._id} id={`address-${index}`} />
                  <Label htmlFor={`address-${index}`} className="flex-grow">
                    {`${address.name}, ${address.addr}, ${address.city}, ${address.state}, ${address.zip}, ${address.country}, ${address.contact}`}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <Button onClick={handleUseSelectedAddress} disabled={!selectedAddressId} className="w-full">
              Use Selected Address
            </Button>
          </div>
        )}

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Add New Address</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input 
                  id="name" 
                  placeholder="Enter your name" 
                  value={formData.name} 
                  onChange={handleInputChange}
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address *</Label>
                <Input 
                  id="address" 
                  placeholder="Enter your address" 
                  value={formData.address} 
                  onChange={handleInputChange}
                  className={errors.address ? 'border-red-500' : ''}
                />
                {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input 
                  id="city" 
                  placeholder="Enter your city" 
                  value={formData.city} 
                  onChange={handleInputChange}
                  className={errors.city ? 'border-red-500' : ''}
                />
                {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input 
                  id="state" 
                  placeholder="Enter your state" 
                  value={formData.state} 
                  onChange={handleInputChange}
                  className={errors.state ? 'border-red-500' : ''}
                />
                {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">Zip Code *</Label>
                <Input 
                  id="zip" 
                  placeholder="Enter your zip code" 
                  value={formData.zip} 
                  onChange={handleInputChange}
                  className={errors.zip ? 'border-red-500' : ''}
                />
                {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country *</Label>
              <Select 
                id="country" 
                value={formData.country} 
                onValueChange={(value) => handleSelectChange('country', value)}
              >
                <SelectTrigger className={errors.country ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in">India</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="mx">Mexico</SelectItem>
                  <SelectItem value="gb">United Kingdom</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                </SelectContent>
              </Select>
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact">Contact Number *</Label>
              <div className="flex space-x-2">
                <div className="w-1/4">
                  <Select 
                    id="countryCode" 
                    value={formData.countryCode} 
                    onValueChange={(value) => handleSelectChange('countryCode', value)}
                  >
                    <SelectTrigger className={errors.countryCode ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Code" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(countryCodes).map(([country, code]) => (
                        <SelectItem key={country} value={code}>{code}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-3/4">
                  <Input 
                    id="contact" 
                    placeholder="Enter 10-digit number" 
                    value={formData.contact} 
                    onChange={handleInputChange}
                    className={errors.contact ? 'border-red-500' : ''}
                  />
                </div>
              </div>
              {(errors.countryCode || errors.contact) && 
                <p className="text-red-500 text-sm">{errors.countryCode || errors.contact}</p>}
            </div>
            <Button type="submit" className="w-full">
              Save Address and Proceed to Payment
            </Button>
          </form>
        </div>
        
        {paymentStatus && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
            {paymentStatus}
          </div>
        )}
      </div>
    </div>
  );
}
