import React from 'react';
import './App.css';


const App = () => {
    return (
        <>
            <div className="variants__list" role="radiogroup">
                <input
                    // aria-label="White"
                    className="var__radio"
                    // data-label="White"
                    id="Actual ColorWhite"
                    name="Actual Color"
                    type="radio"
                    defaultChecked
                />
                <label
                    // aria-hidden="true"
                    className="var__contain swatch__root"
                    htmlFor="Actual ColorWhite"
                    // availabilitystatus="AVAILABLE"
                    // imageindex={0}
                    // flag
                    // type="swatches"
                >
                    <div
                        className="swatch__content"
                        style={{
                            backgroundImage:
                                'url("//i5.walmartimages.com/asr/fe07e96f-8267-470d-858a-7f6f7b7d67cb_1.0b00a9dcac6e4a30877c8dedf668a0ce.jpeg?odnWidth=40&odnHeight=40&odnBg=ffffff")'
                        }}
                    />
                    <div
                        className="var__overlay swatch__overlay"
                        // data-label="White"
                        // data-variant-id="Actual ColorWhite"
                    />
                </label>



                <input
                    // aria-label="Black"
                    className="var__radio"
                    // data-label="Black"
                    id="Actual ColorBlack"
                    name="Actual Color"
                    type="radio"
                />
                <label
                    // aria-hidden="true"
                    className="var__contain swatch__root"
                    htmlFor="Actual ColorBlack"
                    // availabilitystatus="AVAILABLE"
                    // imageindex={1}
                    // flag
                    // type="swatches"
                >
                    <div
                        className="swatch__content"
                        style={{
                            backgroundImage:
                                'url("//i5.walmartimages.com/asr/3d7dd6f1-aba9-437c-b906-5bc4765e60db_1.0a7c5e9fb9ec79e4f7de944d2d01c98d.jpeg?odnWidth=40&odnHeight=40&odnBg=ffffff")'
                        }}
                    />
                    <div
                        className="var__overlay swatch__overlay"
                        // data-label="Black"
                        // data-variant-id="Actual ColorBlack"
                    />
                </label>



                <input
                    // aria-label="Purple"
                    className="var__radio"
                    // data-label="Purple"
                    id="Actual ColorPurple"
                    name="Actual Color"
                    type="radio"
                />
                <label
                    // aria-hidden="true"
                    className="var__contain swatch__root"
                    htmlFor="Actual ColorPurple"
                    // availabilitystatus="AVAILABLE"
                    // imageindex={2}
                    // flag
                    // type="swatches"
                >
                    <div
                        className="swatch__content"
                        style={{
                            backgroundImage:
                                'url("//i5.walmartimages.com/asr/e526bf29-9579-42ec-92e3-834f8788d9a9_1.c13332e3ba0bab614eb2393db2ae3e79.jpeg?odnWidth=40&odnHeight=40&odnBg=ffffff")'
                        }}
                    />
                    <div
                        className="var__overlay swatch__overlay"
                        // data-label="Purple"
                        // data-variant-id="Actual ColorPurple"
                    />
                </label>



                <input
                    // aria-label="Rose Gold"
                    className="var__radio"
                    // data-label="Rose Gold"
                    id="Actual ColorRose Gold"
                    name="Actual Color"
                    type="radio"
                />
                <label
                    // aria-hidden="true"
                    className="var__contain swatch__root"
                    htmlFor="Actual ColorRose Gold"
                    // availabilitystatus="AVAILABLE"
                    // imageindex={3}
                    // flag
                    // type="swatches"
                >
                    <div
                        className="swatch__content"
                        style={{
                            backgroundImage:
                                'url("//i5.walmartimages.com/asr/ab8e8c45-c0a2-4dcb-844f-fe7b124a02e8_1.bf7fb46d4628b022fdafb2d0e4cc9de4.jpeg?odnWidth=40&odnHeight=40&odnBg=ffffff")'
                        }}
                    />
                    <div
                        className="var__overlay swatch__overlay"
                        // data-label="Rose Gold"
                        // data-variant-id="Actual ColorRose Gold"
                    />
                </label>
            </div>

        </>
    )
}


export default App;