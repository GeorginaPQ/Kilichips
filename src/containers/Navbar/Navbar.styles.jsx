import styled from 'styled-components';
import tw from 'twin.macro';

const NavStyles = styled.div.attrs({
    className: "lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 bg-gray-200"
})`
    &  {
        label {
            ${tw`lg:hidden block`}
        }
        img {
            ${tw`fill-current text-gray-900`}
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


export { NavStyles, LogoContainer };




