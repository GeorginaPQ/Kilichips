import styled from 'styled-components';
import tw from 'twin.macro';

const NavStyles = styled.div.attrs({
    className: "lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 bg-gray-200"
})`
`;

const MenuToggle = styled.div.attrs({
    className: "md:hidden block fill-current text-gray-900 py-0 px-3 md:w-auto"
})`
    &  {
        label {
            ${tw`text-3xl`}
        }
        
    }
        `;

const LogoContainer= styled.div.attrs({
    className: "flex justify-between items-center"
})`
    &  {
        img {
            ${tw``}
        }
    }
        `;

const MenuContainer= styled.div.attrs({
    className: "hidden md:flex md:items-center md:w-auto w-full"
})`
    &  {
        nav {
            ${tw`md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0`}
        }
        span {
            ${tw`md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400`}
        }
    }
        `;

export { NavStyles, LogoContainer, MenuContainer, MenuToggle };




