import styled from 'styled-components';
import tw from 'twin.macro';

const NavStyles = styled.div.attrs({
    className: "lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 bg-gray-200"
})`
    &  {
        h1 {
            ${tw`font-sans text-6xl font-hairline text-6xl text-teal-500`}
        }
    }
        `;

export default NavStyles;




