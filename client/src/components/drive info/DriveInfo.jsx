import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import "./drive_info.css";

const DriveInfo = ({ drive }) => {
    return (
        <>
            <Accordion className='drive-cont'>
                {
                    drive.map((ele) => {
                        return (
                            <AccordionItem className='drive-cont-item' key={ele._id}>
                                <AccordionItemButton className='drive-cont-head'>
                                    <div>
                                        <table>
                                            <tr>
                                                <td>academic year</td>
                                                <td>:</td>
                                                <td>{ele.academic_year}</td>
                                            </tr>
                                            <tr>
                                                <td>package</td>
                                                <td>:</td>
                                                <td>&#x20B9; {ele.package}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </AccordionItemButton>
                                <AccordionItemPanel className='drive-cont-panel'>
                                    <ul>
                                        {ele.rounds.map((li, i) => {
                                            return (
                                                <li key={i}>
                                                    <table>
                                                        <tr>
                                                            <td>round</td>
                                                            <td>:</td>
                                                            <td>{li.round_name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>selected</td>
                                                            <td>:</td>
                                                            <td>{li.round_selected.length}</td>
                                                        </tr>
                                                    </table>
                                                    <span className='date'>{new Date(li.round_date).toLocaleString().split(",")[0]}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </>
    );
}

export default DriveInfo;