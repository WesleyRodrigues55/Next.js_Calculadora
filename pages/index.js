import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
    return (
        <div>Hello, world!</div>
    );
}

function Title(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: #0d81c2
                }
            `}</style>
        </>
    )
}

function Paragraph(props) {
    const Tag = props.tag || 'p';
    return (
        <Tag>{props.children}</Tag>
    );
}

function Form() {
    const calculo = null;
    const registerUser = event => {
        //não redireciona a página
        event.preventDefault();
    }
    
    const getForm = event => {
        let get_num1 = document.getElementById('num1');
        let get_num2 = document.getElementById('num2');
        let get_operador = document.getElementById('operador');
        let num1 = Number(get_num1.value);
        let num2 = Number(get_num2.value);
        let operador = get_operador.value;

        if (operador == 1) {
            calculo = num1 + num2;
        } else if (operador == 2) {
            calculo = num1 - num2;
        }else if (operador == 3) {
            calculo = num1 / num2;
        }else if (operador == 4) {
            calculo = num1 * num2;
        }

        let resultado = document.getElementById('resultado');
        resultado.value = calculo
    }

    return (
        <form onSubmit={registerUser}>
            <div className='form-group my-2'>
                <label htmlFor='num1'>Primeiro número</label>
                <input type='text' id='num1' autoComplete='num1' className='form-control' required />
            </div>
            <div className='form-group my-2'>
                <label htmlFor='num2'>Segundo número</label>
                <input type='text' id='num2' autoComplete='num1' className='form-control' required />
            </div>
            <div className='form-group my-2'>
                <label htmlFor='operador'>Operador</label>
                <select className='form-control' id='operador'>
                    <option value={1}>Somar</option>
                    <option value={2}>Subtrair</option>
                    <option value={3}>Dividir</option>
                    <option value={4}>Multiplicar</option>
                </select>
            </div>
            <div className='form-group my-2'>
                <label htmlFor='resultado'>Resultado</label>
                <input type='text' id='resultado' autoComplete='resultado' className='form-control' readOnly />
            </div>
            <div className='form-group my-2 d-grid gap-2'>
                <input type='button' value={`calcular`} className='btn btn-dark py-3' onClick={getForm}/>
            </div>
        </form>
    )
}

export default function PaginaInicial() {
    return (
        <>
            <div className='container p-5'>
                <Title>Calculando com Next.js</Title>
                <div className='row'>
                    <div className='col-md-6 mt-5 card card-body bg-light'>
                        <Title tag='h2'>Calculadora</Title>
                        <Paragraph>Vamos calcular...</Paragraph>

                        <Form />
                    </div>

                    <div className='col-md-6 mt-5'>

                    </div>
                </div>
            </div>

        </>
    );
}