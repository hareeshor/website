import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceInner from "../components/sections/ServiceInner";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle pageName="Our Services" />
                <ServiceInner />
            </Layout>
        </>
    )
}
