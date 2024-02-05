import {Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel} from 'react-accessible-accordion';
import "./round_info.css"

const RoundInfo=({info})=>{
    return(
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <h3>{info.round_name}</h3>
                        <p>{info.round_name}</p>
                        <span className='date'>{info.round_date}</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {
                        {/* info.rounds.round_selected.map((ele,i)=>{
                            return(
                                <table key={i}>
                                    <tr>
                                        <th>name</th>
                                        <td>:</td>
                                        <td>{ele.name}</td>
                                    </tr>
                                    <tr>
                                        <th>registration no</th>
                                        <td>:</td>
                                        <td>{ele.registration_no}</td>
                                    </tr>
                                    <tr>
                                        <th>department</th>
                                        <td>:</td>
                                        <td>{ele.department.dept_name}</td>
                                    </tr>
                                </table>
                            );
                        }) */}
                    }
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}

export default RoundInfo;