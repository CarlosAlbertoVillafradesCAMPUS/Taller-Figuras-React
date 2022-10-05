import React from 'react';
import Gmail from '../../../assets/icons/gmail.png';
import Instagram from '../../../assets/icons/instagram.png';
import Linkedin from '../../../assets/icons/linkedin.png';
import Github from '../../../assets/icons/github.svg';

const useContact = () => {
    const iconsContact = [
        {
            "id": 0,
            "name": 'Gmail',
            "url": 'https://mail.google.com/mail/u/0/?tab=wm#inbox',
            "image": Gmail
        },
        {
            "id": 1,
            "name": 'Instagram',
            "url": 'https://www.instagram.com/carlos_villafradess',
            "image": Instagram
        },
        {
            "id": 2,
            "name": 'Linkedin',
            "url": 'https://www.linkedin.com/in/carlos-villafrades-426310237/',
            "image": Linkedin
        },
        {
            "id": 3,
            "name": 'Github',
            "url": 'https://github.com/villafrade',
            "image": Github
        },
    ];
    return[
        iconsContact]
}

export {useContact};