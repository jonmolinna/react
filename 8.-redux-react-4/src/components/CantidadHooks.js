import React from 'react';
import { useSelector } from 'react-redux';

const CantidadHooks = () => {
    const game_shop = useSelector((state) => state.game_shop);

    return (
        <React.Fragment>
            Unidades: {game_shop.pokemon}
        </React.Fragment>
    )
}

export default CantidadHooks;

// UseSelector => Permite obtener Estados
// UseDispatch => permite enviar acciones