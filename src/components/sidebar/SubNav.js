import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import "./sidebar.scss";
import { IoIosArrowForward } from "react-icons/io"
import styled from 'styled-components';

// style uchun:
const SidebarTitle = styled.span``
const SubNavTitle = styled.span``

const SubNav = ({ item }) => {

    //ONCLICK FUNCTION OF SIDEBAR WHICH OPENS THE DROPDOWNS:
    const [subnav, setSubnav] = useState(false)
    const showSubNav = () => setSubnav(!subnav);


    const { title, openicon: Openicon, closeicon: Closeicon, pathname, child } = item;
    return (
        <>
            {pathname ?
                <NavLink to={pathname} className="catalog" style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "green" : "white",
                    }
                }} >
                    <div style={{ display: "flex" }}>
                        <SidebarTitle>{title}</SidebarTitle>
                        <div>
                            {child && subnav ? <Openicon /> : child ? <Closeicon /> : null}
                        </div>
                    </div>
                </NavLink>
                : <div className="catalog" onClick={child && showSubNav} >
                    <div style={{ display: "flex" }}>
                        <SidebarTitle>{title}</SidebarTitle>
                        <div>
                            {child && subnav ? <Openicon /> : child ? <Closeicon /> : null}
                        </div>
                    </div>
                </div>
            }
            {subnav && child.map((item, index) => (
                <div style={{ display: "flex", flexDirection: "row" }} key={index}>
                    <IoIosArrowForward />
                    <NavLink to={item.pathname} className="subnavlink" style={({ isActive }) => {
                        return {
                            backgroundColor: isActive ? "green" : "white",
                        }
                    }}>
                        <SubNavTitle>{item.title}</SubNavTitle>
                    </NavLink>
                </div>
            ))}
        </>
    );
};

export default SubNav