package com.shambhavi.portfolio.model;

import java.util.List;

public record Project(
        String id,
        String title,
        String category,
        List<String> groups,
        String description,
        List<String> technologies,
        List<String> features,
        String github,
        String live
) {
}