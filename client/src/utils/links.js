
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
    {
        text: 'add note',
        path: '.',
        // icon: <FaWpforms />,
    },
    {
        text: 'all notes',
        path: 'all-notes',
        // icon: <MdQueryStats />,
    },
    {
        text: 'profile',
        path: 'profile',
        // icon: <ImProfile />,
    },
    {
        text: 'admin',
        path: 'admin',
        // icon: <MdAdminPanelSettings />,
    },
];

export default links;