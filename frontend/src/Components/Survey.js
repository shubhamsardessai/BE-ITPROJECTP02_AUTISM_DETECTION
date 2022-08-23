import React, { useState} from "react";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import axios from "axios";

import "../Styles/survey.css";

var fs = require("browserify-fs");

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Survey = () => {
  var data = require("./data");
  var surveyData = new Array();

  const questions = [
    {
      questionText: "Has poor eye contact?",
      tag: "Has_poor_eye_contact",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Lacks social smile?",
      tag: "Lacks_social_smile",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Remains aloof?",
      tag: "Remains_aloof",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Doesn't reach out to others?",
      tag: "Does_not_reach_ut_to_others",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Unable to relate to people?",
      tag: "Unable_to_relate_to_people",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Unable to respond to social / environmental ques?",
      tag: "Unable_to_respond_to_social_or_environmental_ques",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Engages in solitary ad repetitive play activities?",
      tag: "Engages_in_solitary_ad_repetitive_play_activities",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Unable to take turns in social interaction?",
      tag: "Unable_to_take_turns_in_social_interaction",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    // Section-1 ends = 8
    {
      questionText: "Shows inappropriate emotional response?",
      tag: "Shows_inappropriate_emotional_response",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Shows exaggerated emotions ?",
      tag: "Shows_exaggerated_emotions",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Engages in self-simulating emotions?",
      tag: "Engages_in_self_simulating_emotions",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Lacks fear of danger?",
      tag: "Lacks_fear_of_danger",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Excited or agitated for no apparent reason?",
      tag: "excited_or_agitated_for_no_apparent_reason",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    // section-2 ends = 13
    {
      questionText: "Acquired speech and lost it?",
      tag: "Acquired_speech_and_lost_it",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText:
        "Has difficulty in using non-verbal language or gesture's to communicate?",
      tag: "Has_difficulty_in_using_non_verbal_language_or_gestures_to_communicate",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Engages in stereotype and repetitive use of language?",
      tag: "Engages_in_stereotype_and_repetitive_use_of_language",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Engages in echolalic speech?",
      tag: "Engages_in_echolalic_speech",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Produces infantile squeals / unusual noises ?",
      tag: "Produces_infantile_squeals_or_unusual_noises",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Unable to initiate or sustain conversations with others?",
      tag: "Unable_to_initiate_or_sustain_conversations_with_others",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Uses jargon or meaningless words?",
      tag: "Uses_jargon_or_meaningless_words",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Uses pronoun reversals?",
      tag: "Uses_pronoun_reversals",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText:
        "Unable to grasp pragmatics of communications (real meaning)?",
      tag: "Unable_to_grasp_pragmatics_of_communications",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    // section-3 ends = 22
    {
      questionText: "Engages in stereotype and repetitive motor mannerism ?",
      tag: "Engages_in_stereotype_and_repetitive_motor_mannerism",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Shows attachment to inanimate objects ?",
      tag: "Shows_attachment_to_inanimate_objects",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Shows hyper-activity / restlessness?",
      tag: "Shows_hyper_activity_or_restlessness",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Exhibits aggressive behavior?",
      tag: "Exhibits_aggressive_behavior",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Throws temper tantrums?",
      tag: "Throws_temper_tantrums",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Engages in self-injury's behavior?",
      tag: "Engages_in_self_injury_behavior",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Insist on sameness?",
      tag: "Insist_on_sameness",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    // Section-4 ends = 28
    {
      questionText: "Unusually sensitive to stimuli?",
      tag: "Unusually_sensitive_to_stimuli",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Stares into space for a long period of time?",
      tag: "Stares_into_space_for_a_long_period_of_time",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Has difficulty in tracking objects?",
      tag: "Has_difficulty_in_tracking_objects",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Has unusual vision?",
      tag: "Has_unusual_vision",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Insensitive to pain ?",
      tag: "Insensitive_to_pain",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText:
        "Responds to objects / people usually by smelling, touching or tasting ?",
      tag: "Responds_to_objects_or_people_usually_by_smelling_touching_or_tasting",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    // Section-5 ends = 34
    {
      questionText: "Inconsistent attention and concentration?",
      tag: "Inconsistent_attention_and_concentration",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Shows delay in responding?",
      tag: "Shows_delay_in_responding",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Has unusual memory of some kind?",
      tag: "Has_unusual_memory_of_some_kind",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    {
      questionText: "Has savant ability?",
      tag: "Has_savant_ability",
      answerOptions: [
        { answerText: "Rarely", optionValue: 1 },
        { answerText: "Sometimes", optionValue: 2 },
        { answerText: "Frequently", optionValue: 3 },
        { answerText: "Mostly", optionValue: 4 },
        { answerText: "Always", optionValue: 5 },
      ],
    },
    // Section 6 ends
  ];

  // Dialog
  const [open, setOpen] = React.useState(false);

  const [autistic, setAutistic] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const [prev, setPrev] = useState(false);

  const [count, setCount] = useState(1);
  const [index, setIndex] = useState(0);
  const [header1, setHeader1] = useState("Section: 1");
  const [header2, setHeader2] = useState(
    "SOCIAL RELATIONSHIPS AND RECIPROCITY"
  );

  const btn = document.getElementById("submit");

  const handleAnswerOptionClick = (isCorrect, optionValue, tag) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (count < 40) {
      setCount(count + 1);
      console.log(count);
      if (count > 0 && count < 8) {
        setHeader1("Section: 1");
        setHeader2("SOCIAL RELATIONSHIPS AND RECIPROCITY");
      }
      if (count > 7 && count < 13) {
        setHeader1("Section: 2");
        setHeader2("EMOTIONAL RESPONSIVENESS");
      }
      if (count > 12 && count < 22) {
        setHeader1("Section: 3");
        setHeader2("SPEECH LANGUAGE AND COMMUNICATION");
      }
      if (count > 21 && count < 27) {
        setHeader1("Section: 4");
        setHeader2("BEHAVIOUR PATTERNS");
      }
      if (count > 27 && count < 33) {
        setHeader1("Section: 5");
        setHeader2("SENSORY ASPECTS");
      }
      if (count > 33) {
        setHeader1("Section: 6");
        setHeader2("COGNITIVE COMPONENT");
      }
      if (count == 38) {
        btn.style.display = "block";
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }

      tag = "'" + tag + "'";

      var dataPush = tag + ": " + optionValue;
      console.log(dataPush);

      // Writing to JSON file
      data.push(dataPush);
      setIndex();

      fs.writeFile("data.json", data, (err) => {
        console.log("From Data:");
        console.log(data + "");
      });
    }
  };

  const handleBackClick = (prev) => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setPrev((prev = true));
      if (prev) {
        setCurrentQuestion(prevQuestion);
      }
    }
    console.log(prevQuestion);
    if (count > 1) {
      setCount(count - 1);
      console.log(count);
      if (count > 0 && count < 10) {
        setHeader1("Section: 1");
        setHeader2("SOCIAL RELATIONSHIPS AND RECIPROCITY");
      }
      if (count > 9 && count < 15) {
        setHeader1("Section: 2");
        setHeader2("EMOTIONAL RESPONSIVENESS");
      }
      if (count > 14 && count < 24) {
        setHeader1("Section: 3");
        setHeader2("SPEECH LANGUAGE AND COMMUNICATION");
      }
      if (count > 23 && count < 30) {
        setHeader1("Section: 4");
        setHeader2("BEHAVIOUR PATTERNS");
      }
      if (count > 29 && count < 36) {
        setHeader1("Section: 5");
        setHeader2("SENSORY ASPECTS");
      }
      if (count > 37) {
        setHeader1("Section: 6");
        setHeader2("COGNITIVE COMPONENT");
      }
    }

    prev = false;
    console.log(data);
  };

  const [initialData, setInitialData] = useState([{}]);
  const [state, setState] = useState([]);
  const handleSubmit = async (event, isSubmit) => {
    setOpen(true);
    console.log("making request");
    console.log(data);
    var json = JSON.stringify(data);
    json = json.replace("[", "");
    json = json.replace("]", "");
    json = "{" + json + "}";
    json = "[" + json + "]";
    console.log("From Submit");
    console.log(json);
    const res = await axios.post("http://localhost:8000/api/predict/", json);
    res.data.response == 0
      ? setAutistic("/notautistic")
      : setAutistic("/autistic");
   
  };

  const handleResult = () => {
   
  };

  return (
    <div className="main-app">
      <h1 className="header1">{header1}</h1>
      <h1 className="header2">{header2}</h1>
      <div className="app-container">
        <div className="app">
          <>
            <div className="question-section">
              <div className="question-count">
                <span className="sub1">Question {currentQuestion + 1}</span>
                <span className="sub2">/{questions.length}</span>
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={value}
                  onChange={handleChange}
                >
                  <button
                    onClick={() =>
                      handleAnswerOptionClick(
                        answerOption.isCorrect,
                        answerOption.optionValue,
                        questions[currentQuestion].tag
                      )
                    }
                  >
                    {answerOption.answerText}
                  </button>
                </RadioGroup>
              ))}
            </div>
            <div className="button-section">
              {/* <form> */}
              <button
                className="back-button"
                onClick={() => handleBackClick(true)}
              >
                Back
              </button>
              <button
                className="submit-button"
                src="http://localhost:5000/test"
                id="submit"
                onClick={() => handleSubmit(true)}
              >
                Submit
              </button>
            </div>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">
                {"Thank you!"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Your response has been submitted successfully.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleResult} href={autistic} color="primary">
                  Get result
                </Button>
              </DialogActions>
            </Dialog>
          </>
        </div>
      </div>
    </div>
  );
};

export default Survey;
