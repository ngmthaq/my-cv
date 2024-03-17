import { forwardRef, memo } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

const ProjectDetailDialog = ({ open, onClose, project }) => {
  return (
    <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
            PROJECT DETAILS
          </Typography>
        </Toolbar>
      </AppBar>
      {project && (
        <Box sx={{ padding: "32px 16px" }}>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <strong>Project Name</strong>
                  </TableCell>
                  <TableCell>{project.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Project Owner</strong>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <Avatar src={project.customerAvatar} />
                      {project.customer}
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>My Position</strong>
                  </TableCell>
                  <TableCell>{project.position}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Team Members</strong>
                  </TableCell>
                  <TableCell>
                    {project.teamMembers} {project.teamMembers === 1 ? "developer" : "developers"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Project Description</strong>
                  </TableCell>
                  <TableCell sx={{ whiteSpace: "pre-line" }}>{project.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Project Technologies</strong>
                  </TableCell>
                  <TableCell>
                    {project.technologies.map((tech, index) => (
                      <Chip key={index} label={tech} color="primary" variant="outlined" sx={{ margin: "4px" }} />
                    ))}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Typography sx={{ display: "block", margin: "32px 0 16px" }} variant="caption">
              **NOTE: Image for illustrative purposes only
            </Typography>
            <img
              src={project.image}
              alt={project.id}
              style={{ width: "800px", maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        </Box>
      )}
    </Dialog>
  );
};

export default memo(ProjectDetailDialog);

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
