import React, { useState, useRef } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Team from "./Team";
import "./styles/Randomizer.css";

const gens = ["SS", "SM", "XY", "BW", "DP", "RS", "GS", "RB"];
const tiers = [
  { gen: "RB", tiers: ["OU", "UU"] },
  { gen: "GS", tiers: ["OU", "UU", "NU"] },
  { gen: "RS", tiers: ["OU", "UU", "NU", "Uber"] },
  { gen: "DP", tiers: ["OU", "UU", "NU", "Uber", "LC"] },
  { gen: "BW", tiers: ["OU", "UU", "RU", "NU", "Uber", "LC"] },
  { gen: "XY", tiers: ["OU", "UU", "RU", "NU", "PU", "Uber", "LC"] },
  { gen: "SM", tiers: ["OU", "UU", "RU", "NU", "PU", "Uber", "LC"] },
  { gen: "SS", tiers: ["OU", "UU", "RU", "NU", "PU", "Uber", "LC"] }
];
const weights = ["Standard", "Mixed", "Heat"];

function Randomizer() {
  const [generation, setGeneration] = useState("SS");
  const [tier, setTier] = useState("OU");
  const [weight, setWeight] = useState("Standard");

  const [exTeam, setExTeam] = useState("");
  const [exModal, setExModal] = useState(false);
  const [copied, setCopied] = useState("");

  const [impTeam, setImpTeam] = useState("");
  const [impModal, setImpModal] = useState(false);

  const teamRef = useRef();

  const generateOptions = () => {
    return (
      <Form className="team-options">
        <FormGroup>
          <Input
            type="select"
            name="generation"
            value={generation}
            onChange={e => {
              setGeneration(e.target.value);
              setTier("OU");
            }}
          >
            {gens.map(gen => (
              <option value={gen} key={gen}>
                {gen}
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="select"
            name="tier"
            value={tier}
            onChange={e => setTier(e.target.value)}
          >
            {tiers
              .filter(el => el.gen === generation)[0]
              .tiers.map(tier => (
                <option value={tier} key={tier}>
                  {tier}
                </option>
              ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="select"
            name="weight"
            value={weight}
            onChange={e => setWeight(e.target.value)}
          >
            {weights.map(weight => (
              <option value={weight} key={weight}>
                {weight}
              </option>
            ))}
          </Input>
        </FormGroup>
        <Button
          style={{ border: "3px solid #b5e9f6", color: "#b5e9f6" }}
          outline
          color="primary"
          onClick={e => {
            e.preventDefault();
            if (weight === "Standard") teamRef.current.getTeam();
            if (weight === "Mixed") teamRef.current.getLowerTeam(3);
            if (weight === "Heat") teamRef.current.getLowerTeam(1);
          }}
        >
          Randomize
        </Button>
        <Button
          style={{ border: "3px solid #ff8a8a", color: "#ff8a8a" }}
          outline
          color="danger"
          onClick={e => {
            e.preventDefault();
            setExTeam(teamRef.current.exportTeam());
            setExModal(true);
          }}
        >
          Export
        </Button>
        <Button
          style={{ border: "3px solid #ff8a8a", color: "#ff8a8a" }}
          outline
          color="danger"
          onClick={e => {
            e.preventDefault();
            setImpModal(true);
          }}
        >
          Import
        </Button>
      </Form>
    );
  };

  const exportModal = () => {
    return (
      <Modal
        open={exModal}
        onClose={e => {
          setExModal(false);
          setCopied("");
        }}
      >
        <Card style={{ overflow: "scroll" }} className="card">
          <CardHeader
            title="Export"
            action={
              <CopyToClipboard text={exTeam} onCopy={() => setCopied("Copied")}>
                <Button color="dark" style={{ marginTop: 8 }}>
                  Copy
                </Button>
              </CopyToClipboard>
            }
            subheader={copied}
          />
          <CardContent>
            <TextField
              variant="outlined"
              multiline
              value={exTeam}
              style={{ width: "100%" }}
            />
          </CardContent>
        </Card>
      </Modal>
    );
  };

  const importModal = () => {
    return (
      <Modal
        open={impModal}
        onClose={e => {
          setImpTeam("");
          setImpModal(false);
        }}
      >
        <Card style={{ overflow: "scroll" }} className="card">
          <CardHeader title="Import" action={<Button
              color="dark"
              onClick={e => {
                teamRef.current.importTeam(impTeam);
                setImpModal(false);
              }}
              style={{ marginTop: 8 }}
            >
              Import
            </Button>}/>
          <CardContent>
            <TextField
              variant="outlined"
              multiline
              value={impTeam}
              onChange={e => setImpTeam(e.target.value)}
              style={{ width: "100%" }}
            />
          </CardContent>
        </Card>
      </Modal>
    );
  };

  return (
    <section className="randomizer">
      <div className="title">RANDOM POKÉMON TEAM GENERATOR</div>
      {generateOptions()}
      {exportModal()}
      {importModal()}
      <Team gen={generation} tier={tier} weight={weight} ref={teamRef} />
    </section>
  );
}

export default Randomizer;
