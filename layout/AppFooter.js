import getConfig from 'next/config';
import React, {useContext} from 'react';
import {LayoutContext} from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    //logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`
    return (
        <div className="layout-footer">
       
            <span className="font-medium ml-2">Copyright 2023 All Rights Reserved.</span>
        
        </div>
    );
};

export default AppFooter;
