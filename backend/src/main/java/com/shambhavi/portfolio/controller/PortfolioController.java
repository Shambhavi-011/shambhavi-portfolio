package com.shambhavi.portfolio.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shambhavi.portfolio.model.Project;
import com.shambhavi.portfolio.service.ProjectService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class PortfolioController {

    private final ProjectService projectService;

    public PortfolioController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of(
                "status", "UP",
                "message", "Shambhavi portfolio backend is running"
        );
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return projectService.getAllProjects();
    }
}