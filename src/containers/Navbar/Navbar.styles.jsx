import styled from 'styled-components';
import tw from 'twin.macro';

const NavWrapper = styled.div`
  color: gray;
  padding: 0;
`

const NavStyles = styled.div.attrs({
    className: "flex  md:pt-0 items-center md:justify-between"
})`
`;

const Container = styled.div.attrs({
    className: "flex row-auto items-center p-1  w-1/2 lg:w-1/6 lg:justify-end"
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

const MenuToggle = styled.div.attrs({
    className: ""
})`
    &  {
        button {
            ${tw`block lg:hidden p-3 text-3xl`}
        }
        div {
            ${tw`flex row-auto items-center p-3`}
        }
        span {
            ${tw`text-orange-500 text-3xl`}
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
            ${tw`text-orange-500`}
        }
    }
        `;
const Login = styled.div.attrs({
    className: "flex row-auto items-center p-1  md:mr-10  lg:w-1/6 sm:justify-end"
})`
    &  {
        span:first-child {
            ${tw`mt-1 p-1 text-orange-500 text-xs`}
        }

        span:nth-child(2) {
            ${tw`text-2xl p-2 text-orange-500`}
        }
        div {
            ${tw`flex row-auto items-center p-1`}
        }
    }    
        `;

export { NavWrapper, NavStyles, LogoContainer, MenuContainer, MenuToggle, Login, Container };




