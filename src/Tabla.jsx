export default function Tabla({ info }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Matricula</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        info.map((dato) => (
                            <tr>
                                <td>{dato.matricula}</td>
                                <td>{dato.nombre}</td>
                                <td>{dato.apellido}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}