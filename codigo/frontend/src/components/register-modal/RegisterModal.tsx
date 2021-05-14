import { Grid, InputAdornment, Link, TextField } from '@material-ui/core'
import { CreditCard, Email, LockOpen, Person, Phone } from '@material-ui/icons'
import axios from 'axios'
import { Component } from 'react'
import API from '../../services/api'
import './RegisterModal.css'

function selectAccountType(e: any) {
  const selectedButton = e.target
  const nonSelectedButton = document.getElementById(
    selectedButton.id === 'btn-sou-dev' ? 'btn-busco-dev' : 'btn-sou-dev'
  )
  if (selectedButton.classList.length === 0) {
    selectedButton.classList.add('active')
    nonSelectedButton?.classList.remove('active')
  } else {
    selectedButton.classList.remove('active')
    nonSelectedButton?.classList.add('active')
  }
}

export default class RegisterModal extends Component {
  state = {
    userType: '',
    name: '',
    cpfCnpj: 0,
    phone: 0,
    email: '',
    password: '',
  }

  handleChange = (event: { target: { name: any; value: any } }) => {
    switch (event.target.name) {
      case 'name':
        this.setState({ name: event.target.value });
        break;
      case 'cpf_cnpj':
        this.setState({ cpfCnpj: event.target.value });
        break;
      case 'phone':
        this.setState({ phone: event.target.value });
        break;
      case 'email':
        this.setState({ email: event.target.value });
        break;
      case 'password':
        this.setState({ password: event.target.value });
        break;

    }
  }

  handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const userTypeElement = document.querySelector('.active')?.id

    const userType = (userTypeElement === "btn-sou-dev") ? 'dev' : 'client'

    console.log("userType: ", userType)


    const user = {
      userType: userType,
      name: this.state.name,
      cpfCnpj: this.state.cpfCnpj,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password
    };

    console.log("user: ", user);

    try {
      await axios.post(`${API}/users/register`, user)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    } catch (e) {
      console.log(e)
      window.location.href = "/dashboard";
    }
  }

  async componentDidMount() {
    const res = await axios.get('/');
    console.log(res);
  }


  urlParams = new URLSearchParams(window.location.search)
  accountType = this.urlParams.get('type') ? this.urlParams.get('type') : null

  souDevActive = (this.accountType === 'sou-dev') ? 'active' : ''
  buscoDevActive = (this.accountType === 'busco-dev') ? 'active' : ''

  render() {
    return (
      <Grid container className="RegisterModal">
        <Grid item xs={12}>
          <form method="post" autoComplete="off" onSubmit={this.handleSubmit}>
            <Grid item xs={12}>
              <h2>Cadastre-se</h2>
            </Grid>
            <div className="btns-tipo-de-conta">
              <button
                id="btn-sou-dev"
                type="button"
                className={this.souDevActive}
                onClick={selectAccountType}
              >
                Sou desenvolvedor
                </button>
              <button
                id="btn-busco-dev"
                type="button"
                className={this.buscoDevActive}
                onClick={selectAccountType}
              >
                Busco desenvolvedores
                </button>
            </div>
            <Grid item xs={12}>
              <TextField
                name="name"
                fullWidth
                margin={'normal'}
                label="Nome"
                variant="outlined"
                type="text"
                onChange={this.handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="cpf_cnpj"
                fullWidth
                margin={'normal'}
                label="CPF/CNPJ"
                variant="outlined"
                type="text"
                onChange={this.handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CreditCard />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="phone"
                fullWidth
                margin={'normal'}
                label="Telefone"
                variant="outlined"
                type="text"
                onChange={this.handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                fullWidth
                margin={'normal'}
                label="Email"
                variant="outlined"
                type="text"
                onChange={this.handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                fullWidth
                margin={'normal'}
                label="Senha"
                variant="outlined"
                type="password"
                onChange={this.handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOpen />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <button className="btn-submit" type="button">
                <Link color="inherit" href="/register-continue">Cadastrar</Link>
              </button>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12}>
          <p>
            Já tem uma conta?{' '}
            <p className="link">
              <Link href="/login" color="inherit">
                Acesse aqui
                </Link>
            </p>
          </p>
        </Grid>
      </Grid>
    )
  }

}
