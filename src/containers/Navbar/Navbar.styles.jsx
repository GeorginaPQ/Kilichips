import styled from 'styled-components';
import tw from 'twin.macro';

const NavStyles = styled.div.attrs({
    className: "flex justify-around pt-4 md:pt-0 items-center"
})`
`;

const MenuToggle = styled.div.attrs({
    className: ""
})`
    &  {
        button {
            ${tw`block lg:hidden p-3`}
        }
        div {
            ${tw`flex row-auto items-center p-3`}
        }
        span {
            ${tw`text-orange-700`}
        }
        
    }
        `;

const LogoContainer= styled.div.attrs({
    className: ""
})`
    &  {
        img {
            ${tw`h-10 p-0 md:h-16 lg:p-2`}
        }
    }
        `;

const MenuContainer= styled.div.attrs({
    className: "hidden lg:block"
})`
    &  {
        nav {
            ${tw`flex row-auto items-center`}
        }
        div {
            ${tw`flex row-auto items-center p-3`}
        }
        span {
            ${tw`text-orange-700`}
        }
    }
        `;
const Login = styled.div.attrs({
    className: "flex row-auto items-center p-1"
})`
    &  {
        span {
            ${tw`mt-1 p-1 text-orange-700 `}
        }
        div {
            ${tw`flex row-auto items-center p-1`}
        }
    }    
        `;

export { NavStyles, LogoContainer, MenuContainer, MenuToggle, Login };




