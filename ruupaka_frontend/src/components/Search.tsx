import React, { useEffect, useState } from "react";
import { Container, Stack, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchTable from "./SearchTable";

function Search(){
    const [data_file, set_data_file] = useState([]);
    const [source_domain, set_source_domain] = useState("");
    const [target_domain, set_target_domain] = useState("");
    const [metaphor_type_in_sinhala, set_metaphor_type] = useState("");
    const [poem_name_in_sinhala, set_poem] = useState("");
    const [poet_in_sinhala, set_poet] = useState("");

    const searchInputs = () => {
        fetch(`http://localhost:3000/searchQuery?source_domain=${source_domain}&target_domain=${target_domain}&metaphor_type_in_sinhala=${metaphor_type_in_sinhala}&poem_name_in_sinhala=${poem_name_in_sinhala}&poet_in_sinhala=${poet_in_sinhala}`).then(
          (response) => response.json()).then(
            (data) => {
              // console.log(data)
              set_data_file(data.map((item: any) => item._source));
            }
          ).catch((error) => console.error("Error: ", error))
      };

    useEffect(() => {
        fetch("http://localhost:3000/getAllMetaphors")
          .then((response) => response.json())
          .then((data) => {
            set_data_file(data.map((item: any) => item._source));
          })
          .catch((error) => console.log("Error in Get All Metaphors:", error));
    }, []);

    return(
        <div>
        <form noValidate autoComplete="off">
            <main>
            <Container fixed>
                <Stack
                sx={{ pt: 4 }}
                direction="column"
                spacing={5}
                justifyContent="center"
                >
                <Stack sx={{ pt: 4 }} direction="row" spacing={3} justifyContent="center">

                    <TextField
                        label="Source Domain"
                        variant="outlined"
                        value={source_domain}
                        onChange={(e) => set_source_domain(e.target.value)}
                        fullWidth
                        margin="normal" 
                    />
                    <TextField
                        label="Target Domain"
                        variant="outlined"
                        value={target_domain}
                        onChange={(e) => set_target_domain(e.target.value)}
                        fullWidth
                        margin="normal" 
                    />
                    <TextField
                        label="Metaphor Type"
                        variant="outlined"
                        value={metaphor_type_in_sinhala}
                        onChange={(e) => set_metaphor_type(e.target.value)}
                        fullWidth
                        margin="normal" 
                    />
                    <TextField
                        label="Poem"
                        variant="outlined"
                        value={poem_name_in_sinhala}
                        onChange={(e) => set_poem(e.target.value)}
                        fullWidth
                        margin="normal" 
                    />
                    <TextField
                        label="Poet"
                        variant="outlined"
                        value={poet_in_sinhala}
                        onChange={(e) => set_poet(e.target.value)}
                        fullWidth
                        margin="normal" 
                    />
                    
                    <Button
                        variant="contained"
                        startIcon={<SearchIcon />}
                        sx={{ width: "350px" }}
                        onClick={searchInputs}
                    >
                    Search
                    </Button>
                </Stack>
                {/* <MetaphorSearchResultTable dataJson={backendData} /> */}
                </Stack>
            </Container>
            <Container>
                <SearchTable dataJson={data_file} />
            </Container>
            </main>
        </form>
    </div>
    );
}

export default Search;