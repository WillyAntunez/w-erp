import { Content } from '@/components/Layout/components/Content/Content';
import NotFound from '@/components/NotFound';
import UnderConstruction from '@/components/UnderConstruction';
import React from 'react';

export const Homepage = () => {
    return (
        <Content title="Inicio" icon={'Home'}>
            <UnderConstruction />
            {/* <NotFound /> */}
        </Content>
    );
};
