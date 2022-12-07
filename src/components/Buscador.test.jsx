import { render } from '@testing-library/react'
import Buscador from './Buscador';
import '@testing-library/jest-dom';

describe('<Buscador/>', () =>{
    test('Should render component', () =>{
        const onBuscar = jest.fn();
        const component = render(<Buscador onBuscar={onBuscar} />);
        expect(true).toBe(true);
    })
});