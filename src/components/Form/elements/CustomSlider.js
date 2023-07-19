import { Slider, } from '@mui/material';
import { styled } from '@mui/material/styles';
import { STATS } from '../../../utils/constants';

export default function CustomSlider({
    celebrity,
    paragraphs,
    setParagraphs
}){
    const PrettoSlider = styled(Slider)({
        color: STATS[celebrity]?.color,
        height: 8,
        minWidth: 150,
        paddingTop: 23,
        paddingBottom:23,
        '& .MuiSlider-track': {
            border: 'none',
        },
        "& .MuiSlider-thumb": {
            height: 24,
            width: 24,
            backgroundColor: "#fff",
            border: "2px solid currentColor",
            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
              boxShadow: "inherit"
            },
            "&:before": {
              display: "none"
            }
        },
        "& .MuiSlider-valueLabel": {
            lineHeight: 1.2,
            fontSize: 12,
            background: "unset",
            padding: 0,
            width: 32,
            height: 32,
            borderRadius: "50% 50% 50% 0",
            backgroundColor: STATS[celebrity]?.color,
            transformOrigin: "bottom left",
            transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
            "&:before": { display: "none" },
            "&.MuiSlider-valueLabelOpen": {
              transform: "translate(50%, -100%) rotate(-45deg) scale(1)"
            },
            "& > *": {
              transform: "rotate(45deg)"
            }
        }
    });
    
    return(
        <PrettoSlider
            valueLabelDisplay="auto"
            defaultValue={1}
            min={1}
            max={10}
            value={paragraphs}
            onChange={(event) => setParagraphs(event.target.value)}
        />
    );
}