"use client"
import React, { useState } from "react";
import { Label } from "../../../components/ui/label"
import { Input } from "../../../components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../components/ui/select"
import { Button } from "../../../components/ui/button"

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
  const [submittedData, setSubmittedData] = useState(null);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const [errors, setErrors] = useState({});

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

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    setSubmittedData(formData);
      
    console.log('Form Data:', formData);
   
    if (validateForm()) {

      const token = getCookie('jwtToken');
     
      try {
        const response = await fetch('https://amrti-main-backend.vercel.app/api/v1/amrti/address/createAddress', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` ,
          },
          body: JSON.stringify(formData),
        });

        const data=response.json()
        console.log(data)

        if (response.ok) {
          console.log('Delivery information saved successfully');
   
        } else {
          console.error('Failed to save delivery information');
     
        }
      } catch (error) {
        console.error('Error:', error);
    
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="space-y-6 sm:space-y-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">Delivery Information</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Please provide your shipping address to proceed with your order.
          </p>
        </div>
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
            Continue to Payment
          </Button>
        </form>
      </div>
    </div>
  )
}