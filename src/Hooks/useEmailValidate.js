import { useState } from 'react';

const useEmailValidate = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(email);
        return isValidEmail;
};

export default useEmailValidate;