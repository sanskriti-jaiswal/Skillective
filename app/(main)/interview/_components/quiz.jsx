"use client";

import { generateQuiz } from "@/actions/interview";
import useFetch from "@/hooks/use-fetch";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarLoader } from "react-spinners";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";
import { toast } from "sonner";
import QuizResult from "./quiz-result"; // Import the QuizResult component

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [quizResult, setQuizResult] = useState(null); // Store the formatted result

  const {
    loading: generatingQuiz,
    fn: generateQuizFn,
    data: quizData,
  } = useFetch(generateQuiz);

  // Temporary replacement for saveQuizResult
  const [savingResult, setSavingResult] = useState(false);

  useEffect(() => {
    if (quizData) {
      setAnswers(new Array(quizData.length).fill(null));
    }
  }, [quizData]);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      finishQuiz();
    }
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === quizData[index].correctAnswer) {
        correct++;
      }
    });
    return (correct / quizData.length) * 100;
  };

  const formatQuizResult = (score) => {
    const questions = quizData.map((question, index) => ({
      question: question.question,
      userAnswer: answers[index],
      answer: question.correctAnswer,
      isCorrect: answers[index] === question.correctAnswer,
      explanation: question.explanation,
    }));

    // Generate improvement tip based on score
    let improvementTip = "";
    if (score < 50) {
      improvementTip = "Consider reviewing the fundamentals and practicing more questions in this area.";
    } else if (score < 70) {
      improvementTip = "Good effort! Focus on understanding the concepts behind the questions you missed.";
    } else if (score < 85) {
      improvementTip = "Well done! Review the explanations for missed questions to reach mastery.";
    } else {
      improvementTip = "Excellent work! You have a strong grasp of the material.";
    }

    return {
      quizScore: score,
      questions: questions,
      improvementTip: improvementTip,
    };
  };

  const finishQuiz = async () => {
    const score = calculateScore();
    setFinalScore(score);
    setSavingResult(true);
    
    try {
      // Replace this with actual saveQuizResultFn when you create the action
      // await saveQuizResultFn(quizData, answers, score);
      
      // Temporary simulation of saving
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Format the result for QuizResult component
      const formattedResult = formatQuizResult(score);
      setQuizResult(formattedResult);
      
      setQuizCompleted(true);
      toast.success(`Quiz completed! Your score: ${score.toFixed(1)}%`);
    } catch (error) {
      toast.error(error.message || "Failed to save quiz results");
    } finally {
      setSavingResult(false);
    }
  };

  const handleStartNew = () => {
    setQuizCompleted(false);
    setCurrentQuestion(0);
    setAnswers(new Array(quizData.length).fill(null));
    setShowExplanation(false);
    setQuizResult(null);
    setFinalScore(0);
  };

  if (generatingQuiz) {
    return <BarLoader className="mt-4" width={"100%"} color="gray" />;
  }

  if (!quizData) {
    return (
      <Card className="mx-2">
        <CardHeader>
          <CardTitle>Ready to test your knowledge?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This quiz contains 10 questions specific to your industry and
            skills. Take your time and choose the best answer for each question.
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={generateQuizFn} className="w-full">
            Start Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  }

  // Show results when quiz is completed
  if (quizCompleted && quizResult) {
    return (
      <Card className="mx-2">
        <QuizResult 
          result={quizResult} 
          onStartNew={handleStartNew}
        />
      </Card>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div>
      <Card className="mx-2">
        <CardHeader>
          <CardTitle>
            Question {currentQuestion + 1} of {quizData.length}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg font-medium">{question.question}</p>
          <RadioGroup
            onValueChange={handleAnswer}
            value={answers[currentQuestion]}
            className="space-y-2"
          >
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
          {showExplanation && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="font-medium">Explanation:</p>
              <p className="text-muted-foreground">{question.explanation}</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {!showExplanation && (
            <Button
              onClick={() => setShowExplanation(true)}
              variant="outline"
              disabled={!answers[currentQuestion]}
            >
              Show Explanation
            </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={!answers[currentQuestion] || savingResult}
            className="ml-auto"
          >
            {savingResult ? (
              <>
                <BarLoader className="mr-2" width={20} color="white" />
                Saving...
              </>
            ) : (
              currentQuestion < quizData.length - 1 ? "Next Question" : "Finish Quiz"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Quiz;