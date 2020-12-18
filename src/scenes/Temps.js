import { useState } from 'react';
import { Switch, Slider, Typography } from "antd";
import { SketchPicker } from 'react-color';

const { Title } = Typography;

function Temps() {

    const [ checked, setChecked ] = useState(true);
    const [textPicker, displayTextPicker] = useState(false);
    const [shadowPicker, displayShadowPicker] = useState(false);
    const [ sliderValue, setSliderValue ] = useState(100);
    const [ textSize, setTextSize ] = useState(100);
    const [ textColor, setTextColor ] = useState('#d77023');
    const [ shadowColor, setShadowColor ] = useState('#0060FE');

    const styles = {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
    };

    if (checked) {
        var shadow = '';
        for (var i = 0; i < sliderValue; i++) {
            shadow += `${shadow ? ', ' : ''}${i}px ${i}px 0 ${shadowColor}`;
        }
    } else { shadow = 'none' }

    return (
        <div style={{ width: '50%' }}>
            <Slider
                min={0}
                max={400}
                defaultValue={sliderValue}
                onChange={(value) => setTextSize(value)}
                style={{ width: '50%' }}
            />
            <div style={ styles.swatch } onClick={() => displayTextPicker(!textPicker) }>
                <div style={{ ...styles.color, background: textColor } } />
            </div>
            { textPicker
                ?   <div style={ styles.popover }>
                        <div style={ styles.cover } onClick={() => displayTextPicker(false)  }/>
                        <SketchPicker color={ textColor } onChange={ (color) => setTextColor(color.hex) } />
                    </div>
                :   null
            }
            <Switch defaultChecked onChange={() => setChecked(!checked)} />
            <div style={ styles.swatch } onClick={() => displayShadowPicker(!shadowPicker) }>
                <div style={{ ...styles.color, background: shadowColor } } />
            </div>
            { shadowPicker
                ?   <div style={ styles.popover }>
                        <div style={ styles.cover } onClick={() => displayShadowPicker(false)  }/>
                        <SketchPicker color={ shadowColor } onChange={ (color) => setShadowColor(color.hex) } />
                    </div>
                :   null
            }
            <Slider
                min={0}
                max={400}
                defaultValue={sliderValue}
                onChange={(value) => setSliderValue(value)}
                style={{ width: '50%' }}
            />

            <Title style={{ textShadow: shadow, color: textColor, fontSize: textSize }}>
                Jolicoeur
            </Title>
        </div>
    );
}

export default Temps;
