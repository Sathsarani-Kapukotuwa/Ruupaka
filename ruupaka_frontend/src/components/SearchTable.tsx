import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Container } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

interface MetaphorData {
    metaphor: String;
    interpretation_in_sinhala: String;
    metaphor_type_in_sinhala: String;
    source_domain: String;
    target_domain: String;
    poem_name_in_sinhala: String;
    poet_in_sinhala: String;
    year: String;
}

function SearchTable({dataJson}:{dataJson: MetaphorData[]}){
    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750,  backgroundColor: "#d9dfe9" }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ border:'3px solid #eee' }}>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Metaphor</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Interpretation</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Metaphor Type</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Source Domain</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Target Domain</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Poem</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Poet</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataJson.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 }, border:'3px solid #eee' }}
              >
                <TableCell align="center">{row.metaphor}</TableCell>
                <TableCell align="center">{row.interpretation_in_sinhala}</TableCell>
                <TableCell align="center">{row.metaphor_type_in_sinhala}</TableCell>
                <TableCell align="center">{row.source_domain}</TableCell>
                <TableCell align="center">{row.target_domain}</TableCell>
                <TableCell align="center">{row.poem_name_in_sinhala}</TableCell>
                <TableCell align="center">{row.poet_in_sinhala}</TableCell>
                <TableCell align="center">{row.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default SearchTable;