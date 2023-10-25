import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Search from "./Search";
import Title from "./Title";
import './Home.css'

function Home(){
    const [data_file, set_data_file] = useState([]);
    const [source_domain, set_source_domain] = useState("");
    const [target_domain, set_target_domain] = useState("");
    const [metaphor_type, set_metaphor_type] = useState("");
    const [poem, set_poem] = useState("");
    const [poet, set_poet] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/getAllMetaphors")
          .then((response) => response.json())
          .then((data) => {
            set_data_file(data.map((item: any) => item._source));
            console.log(data);
          })
          .catch((error) => console.log("Error in Get ALl Queries:", error));
      }, []);

      return(
        <div className="Home">
            <div>
                <Title/>
            </div>
            <Container>
                <Search/>
            </Container>
            <Container className="space">
            </Container>
        </div>
      );
}

export default Home;