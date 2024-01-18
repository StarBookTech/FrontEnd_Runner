import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';;
import Divider from '@mui/material/Divider';

export default function AddressForm() {
    const [address, setAddress] = React.useState(0)

    const handleRadioChange = (event: any) => {
        console.log(address)
        setAddress(event.target.value);
        console.log(address)
    };
    return (
        <React.Fragment>

            <h3 id="demo-radio-buttons-group-label">Dirección de recolección</h3>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={0}
                name="radio-buttons-group"
            >
                <FormControlLabel value={1} control={<Radio />} label="5 Calle 6-37 zona 8 Guatemala " onChange={handleRadioChange} />
                <FormControlLabel value={2} control={<Radio />} label="8av 9-32 zona 9 Mixco" onChange={handleRadioChange} />
                <FormControlLabel value={3} control={<Radio />} label="17 Calle 3-45 zona 4 Villa Vueva" onChange={handleRadioChange} />
                <FormControlLabel value={4} control={<Radio />} label="Ingresar dirección" onChange={handleRadioChange} />
                <div className={`address1-init ${address != 4 ? 'address1' : ''}`}>
                    <Grid container spacing={3}  >

                        <Grid item xs={12} sm={6}>

                            <FormControl variant="standard" className='select-checkout'  >
                                <InputLabel id="demo-simple-select-standard-label">Origen</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    label="Origen"
                                >
                                    <MenuItem value={10}>Guatemala</MenuItem>
                                    <MenuItem value={20}>Villa Nueva</MenuItem>
                                    <MenuItem value={30}>Mixco</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <FormControl variant="standard" className='select-checkout'  >
                                <InputLabel id="demo-simple-select-standard-label">Municipio</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    label="Minicipio"
                                >
                                    <MenuItem value={10}>Guatemala</MenuItem>
                                    <MenuItem value={20}>Villa Nueva</MenuItem>
                                    <MenuItem value={30}>Mixco</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="Dirección"
                                fullWidth
                                autoComplete="shipping address-line1"
                                variant="standard"
                            />
                        </Grid>
                    </Grid>
                </div>
            </RadioGroup>
            <br />
            <Divider variant="fullWidth" className='divider-address'/>

            <h3 id="demo-radio-buttons-group-label">Dirección de entrega</h3>

            <Grid container spacing={3}  >

                <Grid item xs={12} sm={6}>

                    <FormControl variant="standard" className='select-checkout'  >
                        <InputLabel id="demo-simple-select-standard-label">Origen</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="Origen"
                        >
                            <MenuItem value={10}>Guatemala</MenuItem>
                            <MenuItem value={20}>Villa Nueva</MenuItem>
                            <MenuItem value={30}>Mixco</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>

                    <FormControl variant="standard" className='select-checkout'  >
                        <InputLabel id="demo-simple-select-standard-label">Municipio</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="Minicipio"
                        >
                            <MenuItem value={10}>Guatemala</MenuItem>
                            <MenuItem value={20}>Villa Nueva</MenuItem>
                            <MenuItem value={30}>Mixco</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Dirección"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                    />
                </Grid>
            </Grid>

        </React.Fragment>
    );
}