import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
    root: {
    '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
    },
    },
}));

// FirstLabel="Id",SecondLabel="PW"
function TextFeild({label,type,value}) {
    const classes = useStyles();
    //var Id = firstLabel;
    return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" type={type} label={label}variant="outlined" value={value}/>
    </form>
    );
}


export default TextFeild;
