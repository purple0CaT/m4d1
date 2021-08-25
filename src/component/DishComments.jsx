import {Row} from 'react-bootstrap'

const DishComents = ({dish}) => (
            dish?
                <Row className="mx-auto justify-content-center">
                <ul>
                    {
                        dish?.comments.map(c =>(
                            <li key={c.id}>{c.comment}</li>
                        ))
                    }
                </ul>
            </Row>
                :
                <p className="my-1 text-center"> Empty</p>
)
export default DishComents