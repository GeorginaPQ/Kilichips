import styled from 'styled-components';
import tw from 'twin.macro';

const NavStyles = styled.div.attrs({
    className: "lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 bg-gray-200"
})`
    &  {
        label {
            ${tw`lg:hidden block fill-current text-gray-900`}
        }
        
    }
        `;

const LogoContainer= styled.div.attrs({
    className: "flex-1 flex justify-between items-center"
})`
    &  {
        img {
            ${tw`w-20 h-16`}
        }
    }
        `;

const MenuContainer= styled.div.attrs({
    className: "hidden lg:flex lg:items-center lg:w-auto w-full"
})`
    &  {
        nav {
            ${tw`lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0`}
        }
        span {
            ${tw`lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400`}
        }
    }
        `;

export { NavStyles, LogoContainer, MenuContainer };




