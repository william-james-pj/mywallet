import { ReactNode, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { format } from "date-fns";

import {
  InputAdornment,
  FormControl,
  RadioGroup,
  FormLabel,
  MenuItem,
} from "@material-ui/core";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { typesArray } from "../../utils/typesArray";
import { IWalletItem } from "../../@types/types";

import { useReduxDispatch } from "../../hooks/useRedux";
import { addExpenses, addGains } from "../../store/wallet";

import * as S from "./styles";

interface IModalAdd {
  open: boolean;
  children: ReactNode;
  handleClose: () => void;
  gains: boolean;
}

export function ModalAdd(props: IModalAdd) {
  const dispatch = useReduxDispatch();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [frequency, setFrequency] = useState("Occasional");

  const handleAdd = () => {
    const obj: IWalletItem = {
      type,
      amount,
      frequency,
      date: format(selectedDate, "MM/dd/yyyy"),
    };

    if (props.gains) dispatch(addGains(obj));
    else dispatch(addExpenses(obj));

    props.handleClose();
  };

  return (
    <S.Container>
      {props.children}
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <S.ModalContainer>
          <S.Modal>
            <S.Header>
              <S.Title>Add</S.Title>
            </S.Header>
            <S.Content>
              <S.Row>
                <S.InputText
                  id="input-amount"
                  label="Amount"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <S.InputText
                  id="input-type"
                  select
                  label="Type"
                  variant="outlined"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  {typesArray.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </S.InputText>
              </S.Row>
              <S.Row>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <S.DatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-filled"
                    label="Date picker filled"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e || new Date())}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    <S.TextFormLabel>Frequency</S.TextFormLabel>
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="gender1"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                  >
                    <S.FormControlLabelS
                      value="Occasional"
                      control={<S.SRadio />}
                      label="Occasional"
                    />
                    <S.FormControlLabelS
                      value="Recurrent"
                      control={<S.SRadio />}
                      label="Recurrent"
                    />
                  </RadioGroup>
                </FormControl>
              </S.Row>
            </S.Content>
            <S.Footer>
              <S.ButtonCancel onClick={props.handleClose}>
                Cancel
              </S.ButtonCancel>
              <S.ButtonAdd onClick={handleAdd}>Add</S.ButtonAdd>
            </S.Footer>
          </S.Modal>
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
}
