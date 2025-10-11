import { useState } from 'react';

export const useFilters = () => {
  const [surname, setSurname] = useState('');
  const [forename, setForename] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [occupation, setOccupation] = useState('');
  const [countyOrigin, setCountyOrigin] = useState('');
  const [religion, setReligion] = useState('');
  const [literacy, setLiteracy] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [relationship, setRelationship] = useState('');
  const [specifiedIllnesses, setSpecifiedIllnesses] = useState('');
  const [yearsMarried, setYearsMarried] = useState('');
  const [childrenBorn, setChildrenBorn] = useState('');
  const [childrenLiving, setChildrenLiving] = useState('');

  const filters = {
    surname, forename, age, sex, occupation, countyOrigin,
    religion, literacy, maritalStatus, relationship,
    specifiedIllnesses, yearsMarried, childrenBorn, childrenLiving
  };

  const setters = {
    setSurname, setForename, setAge, setSex, setOccupation, setCountyOrigin,
    setReligion, setLiteracy, setMaritalStatus, setRelationship,
    setSpecifiedIllnesses, setYearsMarried, setChildrenBorn, setChildrenLiving
  };

  return { filters, setters };
};