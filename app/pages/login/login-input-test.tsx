import { type ChangeEvent, useState } from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router'
import { ButtonGroup, Input } from '@mui/material'
import { blue } from '@mui/material/colors'

//обернуть пару логин\пароль в интерфейс?
//обернуть входные параметры инпута в интерфейс?

const ButtonClick = ({
  login,
  password,
}: {
  login: string
  password: string
}) => {
  const data = login + ' ' + password
  console.log(data)
}

//????????????????????
/*function ButtonClick ({login, password}:{login:string, password :string}):void
{
     console.log(`${login} ${password}`);
}*/

//????????????????????
function ButtonOk({ login, password }: { login: string; password: string }) {
  return (
    <Button
      variant="contained"
      onClick={() => ButtonClick({ login, password })}
    >
      Ok
    </Button>
  )
}

function ButtonCancel() {
  const navigate = useNavigate()
  return (
    <Button variant="contained" onClick={() => navigate('/')}>
      Cancel
    </Button>
  )
}

function InputTest({
  placeholder,
  inputType,
  onChange,
}: {
  placeholder: string
  inputType: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  //const [inputString, setInputString] = useState(placeholder)
  return (
    <div>
      <h1>{inputType}</h1>
      <Input
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'description' }}
        onChange={onChange}
      />
      {/* <input
        type="text"
        style={{
          border: '2px solid black',
          borderRadius: '4px',
          padding: '5px',
        }}
        //value={placeholder}
        placeholder={placeholder}
        //onChange={(event) => setInputString(event.target.value)}
        onChange={onChange}
      />*/}
    </div>
  )
}

/*const onOkClick = () => {
  console.log(login, password)
}*/

export function GetData({
  onOkClick,
}: {
  onOkClick: (login: string, password: string) => void
}) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <form noValidate autoComplete="off">
        <InputTest
          placeholder={'Enter E-Mail'}
          inputType={'Login'}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLogin(e.target.value)
          }
        />
        <InputTest
          placeholder={'Enter Password'}
          inputType={'Password'}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button
            variant="contained"
            onClick={() => onOkClick(login, password)}
          >
            Ok
          </Button>

          <ButtonCancel />
        </ButtonGroup>
      </form>

      {/*<Button variant="contained">Cancel</Button>*/}
    </div>
  )
}
