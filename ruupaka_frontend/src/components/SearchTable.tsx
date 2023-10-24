import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
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
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Metaphor</TableCell>
            <TableCell align="right">Interpretation</TableCell>
            <TableCell align="right">Metaphor Type</TableCell>
            <TableCell align="right">Source Domain</TableCell>
            <TableCell align="right">Target Domain</TableCell>
            <TableCell align="right">Poem</TableCell>
            <TableCell align="right">Poet</TableCell>
            <TableCell align="right">Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataJson.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.metaphor}</TableCell>
              <TableCell align="right">{row.interpretation_in_sinhala}</TableCell>
              <TableCell align="right">{row.metaphor_type_in_sinhala}</TableCell>
              <TableCell align="right">{row.source_domain}</TableCell>
              <TableCell align="right">{row.target_domain}</TableCell>
              <TableCell align="right">{row.poem_name_in_sinhala}</TableCell>
              <TableCell align="right">{row.poet_in_sinhala}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default SearchTable;