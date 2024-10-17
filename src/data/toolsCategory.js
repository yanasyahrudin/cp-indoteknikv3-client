const categories = [
    {
        id: 1,
        name: 'Common Rail CRC Tester',
        type: 'Tester',
        description: 'High-precision tool for testing common rail systems.',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721963153/cp-indoteknik-v3/productsTools/crc_common_rail_DSC_0544_copy_rfncgv.png',
        link: '/products/other-products/tools/common-rail-crc-tester' // Link for Common Rail CRC Tester
    },
    {
        id: 2,
        name: 'Nozzle Tester',
        type: 'Tester',
        description: 'High-quality nozzle tester for engine diagnostics.',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721960151/cp-indoteknik-v3/productsTools/nozzle_tester_pnbez2.png',
        link: '/products/other-products/tools/nozzle-tester' // Link for Nozzle Tester
    },
    {
        id: 3,
        name: 'Injector Bracket',
        type: 'Injector',
        description: 'Durable bracket for injector mounting.',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_600/v1721963220/cp-indoteknik-v3/productsTools/DSC_0524_copy_jyrnyo.png',
        link: '/products/other-products/tools/injector-bracket' // Link for Injector Bracket
    },
    {
        id: 4,
        name: 'Hand Tap T',
        type: 'Hand Tool',
        description: 'Reliable hand tap T for threading operations.',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721963551/cp-indoteknik-v3/productsTools/hand%20tap%20t%20DSC_0485b-removebg-preview_ozpcgp.png',
        link: '/products/other-products/tools/hand-tap-t' // Link for Hand Tap T
    },
    {
        id: 5,
        name: 'Digital Caliper',
        type: 'Measurement',
        description: 'Accurate digital caliper for precise measurements.',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721963452/cp-indoteknik-v3/productsTools/digital_caliper_DSC_0013-removebg-preview_dlbjco.png',
        link: '/products/other-products/tools/digital-caliper' // Link for Digital Caliper
    },
    {
        id: 6,
        name: 'Pin Tool',
        type: 'Tool',
        description: 'Versatile pin tool for various applications.',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721963680/cp-indoteknik-v3/productsTools/pin_tool_DSC_1437-removebg-preview_uw8rc6.png',
        link: '/products/other-products/tools/pin-tool' // Link for Pin Tool
    },
    {
        id: 7,
        name: 'Injector Tool',
        type: 'Injector',
        description: 'Precision tool for injector servicing.',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721965740/cp-indoteknik-v3/productsTools/injector_tool_WhatsApp_Image_2021-01-19_at_14.55.58__2_-removebg-preview_l4yasd.png',
        link: '/products/other-products/tools/injector-tool' // Link for Injector Tool
    },
    {
        id: 8,
        name: 'Universal Injector Tool',
        type: 'Injector',
        description: 'Universal tool for injector maintenance.',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721965348/cp-indoteknik-v3/productsTools/universal_injector_tool_azxyuz.png',
        link: '/products/other-products/tools/universal-injector-tool' // Link for Universal Injector Tool
    },
    {
        id: 9,
        name: 'Seal Kit Removal Tool',
        type: 'Seal Kit',
        description: 'Effective tool for seal kit removal.',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721963857/cp-indoteknik-v3/productsTools/opener_seal_kit_uxbjzm.png',
        link: '/products/other-products/seal-kit/seal-kit-removal-tool' // Link for Seal Kit Removal Tool
    },
    {
        id: 10,
        name: 'Injector Removal Tool',
        type: 'Injector',
        description: 'Specialized tool for injector removal.',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721964747/cp-indoteknik-v3/productsTools/DSC_1282-removebg-preview_pnjpsn.png',
        link: '/products/other-products/tools/injector-removal-tool' // Link for Injector Removal Tool
    },
    {
        id: 11,
        name: 'Injector Tool Set',
        type: 'Tool',
        description: 'Comprehensive tool set for injector repair.',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721964088/cp-indoteknik-v3/productsTools/tools_set_injector_DSC_0378_copy-removebg-preview_wtdx2p.png',
        link: '/products/other-products/tools/injector-tool-set' // Link for Injector Tool Set
    },
    {
        id: 12,
        name: 'Nozzle Tester Pipe',
        type: 'Tool',
        description: 'Comprehensive tool set for injector repair.',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839438/cp-indoteknik-v3/productsTools/PIPA_TESTER_NOZZLE_DSC_0068b-removebg-preview_ynnybg_hipxtj_vusiqq.png',
        link: '/products/other-products/tools/nozzle-tester-pipe' // Link for Nozzle Tester Pipe
    },
    {
        id: 13,
        name: 'Plunger Tester',
        type: 'Tool',
        description: 'Comprehensive tool set for injector repair.',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839439/cp-indoteknik-v3/productsTools/PLUNGER_TESTER_NOZZLE_DSC_0136b-removebg-preview_tefzwb_hqdcnr_do4v52.png',
        link: '/products/other-products/tools/plunger-tester' // Link for Plunger Tester
    },
    {
        id: 14,
        name: 'Injector Pressure Gauge',
        type: 'Tool',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839440/cp-indoteknik-v3/productsTools/Pengukur_Tekanan_Injector_DSC_0008-removebg-preview_crjboj_bkqpie_tczhjn.png',
        link: '/products/other-products/tools/injector-pressure-gauge' // Link for Injector Pressure Gauge
    },
    {
        id: 15,
        name: 'Stand Sketmat & Sketmat',
        type: 'Tool',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839441/cp-indoteknik-v3/productsTools/Stand_Sketmad_And_Sketmad_DSC_0116_copy_f6uzxj_z8qjow_arvps0.png',
        link: '/products/other-products/tools/stand-sketmat' // Link for Stand Sketmad and Sketmad
    },
    {
        id: 16,
        name: 'Pressure Gauge Itech',
        type: 'Tool',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839442/cp-indoteknik-v3/productsTools/Pressure_Gauge_Itech_DSC_0574b_copy_ttwser_moncb2_ckf4b4.png',
        link: '/products/other-products/tools/pressure-gauge-itech' 
    },
    {
        id: 17,
        name: 'Filter Opening Tool',
        type: 'Tool',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839443/cp-indoteknik-v3/productsTools/TOOL_PEMBUKA_FILTER_DENSO_DSC_0003-removebg-preview_k0jsku_xxpdmb_zakp67.png',
        link: '/products/other-products/tools/filter-opening-tool' // Link for Filter Opening Tool
    },
    {
        id: 18,
        name: 'Tool Injector',
        type: 'Tool',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839443/cp-indoteknik-v3/productsTools/TOOL_INJECTOR_DENSO_3_PINS_DSC_0815_maqcxw_u89aeb_wgksp5.png',
        link: '/products/other-products/tools/tool-injector' // Link for Tool Injector
    },
    {
        id: 19,
        name: 'Tool Shim E1024072',
        type: 'Tool',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839444/cp-indoteknik-v3/productsTools/Tool_Shim_E1024072_Itech_Rp.500.000__DSC_0140_copy_ezotmx_msak63_fdun7v.png',
        link: '/products/other-products/tools/tool-shim-e1024072' // Link for Tool Shim E1024072
    },
    
    {
        id: 21,
        name: 'Hex Key No.0512 3.5MM',
        type: 'Tool',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839447/cp-indoteknik-v3/productsTools/KUNCI_HEX_KEY_no.0512_3.5MM_DSC_0562-removebg-preview_dlsple_smbaj0.png',
        link: '/products/other-products/tools/hex-key-no-0512-3-5mm' // Link for Hex Key No.0512 3.5MM
    },
    {
        id: 22,
        name: 'Tools Cat',
        type: 'Tool',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839447/cp-indoteknik-v3/productsTools/TOOLS_CAT_DSC_0510_copy_np60qw_t7aroq_w3xvjc.png',
        link: '/products/other-products/tools/tools-cat' // Link for Tools Cat
    },
];

export default categories;
