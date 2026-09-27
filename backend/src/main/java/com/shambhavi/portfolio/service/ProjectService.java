package com.shambhavi.portfolio.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.shambhavi.portfolio.model.Project;

@Service
public class ProjectService {

    private final List<Project> projects = List.of(
            new Project(
                    "01",
                    "ServiceDesk Pro",
                    "Java Full Stack",
                    List.of("Java", "Full Stack"),
                    "An IT service management platform for organizing employee support requests and managing ticket resolution.",
                    List.of(
                            "Java",
                            "Spring Boot",
                            "Spring Security",
                            "React",
                            "MySQL"
                    ),
                    List.of(
                            "JWT authentication and role-based access",
                            "Ticket assignment and status workflows",
                            "Comment threads, search and filtering"
                    ),
                    "https://github.com/Shambhavi-011/ServiceDesk-Pro",
                    "https://servicedesk-pro-n52u.onrender.com/"
            ),

            new Project(
                    "02",
                    "DataSenseAI",
                    "AI & Data Analytics",
                    List.of("AI", "Full Stack"),
                    "An analytics application that turns uploaded CSV datasets into useful insights, visualizations and answers to natural-language questions.",
                    List.of(
                            "Python",
                            "FastAPI",
                            "React",
                            "SQLite",
                            "Groq AI"
                    ),
                    List.of(
                            "CSV upload with dynamic schema processing",
                            "Natural-language questions converted to read-only SQL",
                            "Interactive charts and dataset summaries"
                    ),
                    "https://github.com/Shambhavi-011/DatasenseAI",
                    "https://datasenseai-frontend.onrender.com/"
            ),

            new Project(
                    "03",
                    "Smart To-Do Task Manager",
                    "Full Stack Application",
                    List.of("Full Stack"),
                    "A task management application for organizing everyday work through projects, labels and a responsive dashboard.",
                    List.of(
                            "React",
                            "Node.js",
                            "Express",
                            "PostgreSQL",
                            "JWT"
                    ),
                    List.of(
                            "User authentication and protected routes",
                            "Create, update and organize tasks",
                            "Persistent storage for projects and labels"
                    ),
                    "https://github.com/Shambhavi-011/smart-todo-task-manager",
                    "https://smart-todo-task-manager-frontend.onrender.com/"
            ),

            new Project(
                    "04",
                    "AI Medical Chatbot",
                    "AI Application",
                    List.of("AI"),
                    "A conversational application that uses an AI API to respond to healthcare-related questions through a simple web interface.",
                    List.of(
                            "Python",
                            "Flask",
                            "JavaScript",
                            "HTML/CSS",
                            "AI API"
                    ),
                    List.of(
                            "Interactive question-and-answer interface",
                            "Natural-language query processing",
                            "Flask backend connected to an AI API"
                    ),
                    "https://github.com/Shambhavi-011/medical-chatbot",
                    null
            )
    );

    public List<Project> getAllProjects() {
        return projects;
    }
}