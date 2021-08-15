const savedCards = [
    {
        name: '33 слова о дизайне',
        image: 'https://images.unsplash.com/photo-1628697406008-1f3cbc466522?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        duration: '1ч 42м',
        like: true,
        save: true,
        _id: 8,
    },
    { 
        name: 'Киноальманах «100 лет дизайна»',
        image: 'https://images.unsplash.com/photo-1628697406008-1f3cbc466522?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        duration: '1ч 42м',
        like: true,
        save: true,
        _id: 9,
    },
    { 
        name: 'В погоне за Бенкси',
        image: 'https://kinopoisk-ru.clstorage.net/2Msn89407/aa39589v8/gz4Sdfafj6n6GVHMVRcG4gb_9N2bKOpewVLHcXIkdgc3jdGcXSSPmHFVuN5qNBxSb6U8sFwi8GEvJv9Yzc6e8ZpLHlTC8r6gnw1QsBFnI79-n4W9qlzyJpwLgkEHBSsfQ8C46SGYTzi58HBGlpSc4-q8AYgFb7E8L3LSOcSyw-SHgqIcf5vHRcYZcUCQs562z9s0dUdw9t9lKhO0JvC6Ti91eTwpDPvoJXQkrsqk3BOO8NVxqfsRHI86zjFEF6PgZx6fyPPzJ-HGaf2AhPdWfttnWBlztLJfxY4LcGYYgsKThd1g0dS3ACWYTFIKnJT7lmzJYTl_vcyvgnatAPtTdDPyk4xTnytNQq01vEgTLpbPb7yJA2SiO5E6M2wCPIqSxy3NCK2sP3j9cACuFjjkczokuVkhY32UIwJeeWin8wyfNn9Q23MvOa7NTTCMM7qye1-IucPoqiO9DotsgrAyRh_xLThJwL_UcexMuur4TJcaSL1N-d-J4N-CQlWMUzt868pjrBPnR_nSWUVgHPOSGh9TiBkPiDZj5b4HmOZ03sIzGW38oTwb4G0kaCJmYMhzDswZ7dnXTcgHYo7Z7CMbBF-mNzBr54_NZmmFEDDjPraj74x9C5y2s03S93zuBCZGs_05OOVck2jlWMDiYrREV0ZY_fXV88FYG5bKPcR_80xjQhOA568HOUqR6VSM_7Yuz28YAfugJgMp3ksoEhAqQgdt7exNeFN8oWxcPjZsYJPiBPnF4d8h0Lse9vW4E_OEi_qPzHfvrxkiVVksfBsGouOnTIVDcBp3qQI7QPqIhg7fwS3s6Xy_rBl0JM4GeNingtzVnaWnGVCnPnbdFCvLNJ-yh1z7y8vNVgX57NjnJtab6yQZs_Re732Ox2BWFH6Wlx3V-KksKyAZ_LzKArzMD9ZsNR2h54GUSy7GuYATU6hrzo8I9__jra4F-UQwNy6mG-fAmRsUSjM10veIytAyysMBKZT5wFMsoSS0RvI8iOfaMH2xDZfVFCMKMpEEE0P4O9qbDOsnz03e-YVgzIeKPhvfdJnDeGrnSfrP4J6cdlpLuSmQNWhj8ImwSK62lLzDBjzpnQ1_3SwDuroBoAeb8GdSj7SXhzOxSk3h5JALClZHF0TNHxxa30FKx7AuGEpiI3XRfFVw1wghpNjSxnC0F4bcSU0RC9moX6L-iey_Z_xHGg8Ydy-7oS71cUDca2puB5ecfcucui_Vouc87qD6ylv5VXjV7Of4ufBM0rZU5MvmxL1RDXfNDIOi5r2UB0OkH8ZTKI9ra836VUkkVIPydkePhIXrsCoP6cqDrEJ4TkLD6S0ARYxT-JWoUNJ2aIx3AkCZvSnzQSiDel4VUF_fHH_OxxijY48hJqmBIJwX-moT60RRAxS632GC-7jCvM5eMyWlED1cA-ThRBAmerxA635wTZ3dayVAjzoGlbi_f0xfxuMwQ_8f7eZNnVxID4pmw8tUkZd0OiudOpsoCnRyalul7RRxOJMM6UC8_n6MLOPaQDlFcfcBtEP2Mkk0z3Mg-_Z3wHtrA7EyEZ3Y2Mcm_iOn9FEXbB73ZcJXdJIAyt7jAUnM8UhvbPE8IO6G7JCLVghp6bWLNUhzJqYJkIdv4IMiv8RHw9dlHoXdNEhzOuJf28gxZ1AqK8HCz2SGXKoCi-EdaDVsJ_SZGNAybgC0mxJkNdkV3wmgm-pieRR3X8QPNu80A4OPLd797aw8a_7eA99MbWvo-ndx7uMcLmwKsivF6bTp_CMQDfDQqhaksJeWIPGNAR_1KJdWsg0Yv0fMx6JDBPOXr8lCVWnk-IO2IoOHCG13cCoPIcrHQC78NkrT-ZHk7dA3tNmcaO4SlBT3-uQdWTV_GajPburZOPsjyIeqHzADsyvtpg29LFArcj57Q0jV62w-Y3X6u3ASGPKOa8FRBF3QJ-SlTOjKBghE37pUvZnx440oJ7amlbCzJ_Bf-gMQWwMvkXqpmaS8c1JC23s8UYf4Uvv1PsdsqhjOwsMFYZR9uKusMbC4InokiNPmvAn1IWPRoDci9sHcE0-oC-b7LIMzazXWWYEsJD9SPu__TEmrPFLXtTYHfEawev5PgblMzay_AHlAiFr-dIwnYuw9wTVHDeRXojIF7JffADPOPwB_Z5tF1l1J0LCjui7DZ9QdSxzKoxEOs_iuJK4e32nZjLn0j6w1mNguhjjc9zJEjf3xz1kgn_IKvZA3z2iHvpdIH-sPpW6dBUwUi6ISU3e4bafQMgftdmcAZmQy2s_pJfjRzGe45ewg9uYEJP-WCNnFHVu5WKs-BkWYty_ES2oHJBu341HiWdG4LI9-PhcbHIWf7OJ7SQoH_IaIzhofyVEA8cCDpHlsiE52uOifOiARAV2j1ZifokaNtBc_yHPqQwx3ExtB9sXZADiDEjpPn3RlsxA-g9k234yWpPo-s0n9KP3I85ClaBA25vScn7pk7THZFx1Yn3ouxTT342hLOrugrydTKVoRiTykO_a2E3-kfS-sTgeRrpPw3qC2Bk-55Yj1WOuUpZjcqmIEDEsazD0dLWPdZBtSdn2o01-8e0ITCI9_3-3KHWEsSOvW-pv_AAlDUGan_a7nYNa05lITbal0VbCbZLXotM5iHJhjEtBBgXkDVViLGnrd1KfnNOdi60yDdx_VlumxpKir-n7fhxiJl5DWo70ii3D-2CoGJz2dYKH0a6AB_JhWQoQMCxrIZemNRwXcT_Yq-ZDTyzT_thdQ08frWTrxNZQk46pqh4tAxUeYLos1Rm8kehjS7uMlnUBtTJs4nXDcLsI4zPtOSBm1hU_F4HO6hlXo3xsU72rn2MNn20Vubb08EI9mpoPDuOU7qLInsXJb4PYM-voHRRGwNTCT2B3k0OpO_OTD8kSNaelzuRjDemqlIF-rJMuaZwQLpzuh7pVRUIyLotLPk6zNvzRir3Uuf4Bi7FrSJ_m5OIHEf6yJuMymEuTQXxq0leVp07FE1_qk',
        duration: '1ч 42м',
        like: true,
        save: true,
        _id: 10,
    },
];

export default savedCards;