import HeaderContainer from "../components/HeaderContainer";
import FormContainer from "../components/FormContainer";
import ListContainer from "../components/ListContainer";

const StudentPage = () => {
    const students = [
        { id: 1, name: "Wilmarc Delos Reyes", srcode: "24-13462", program: "BSIT" },
        { id: 2, name: "Arabella Salazar", srcode: "24-14264", program: "BSIT" },
        { id: 3, name: "Sophia Garcia", srcode: "24-12634", program: "BSIT" },
    ];
    
    return(
        <>
            <HeaderContainer />
            <FormContainer />
            <ListContainer data={students}/>
        </>
    )
}

export default StudentPage;