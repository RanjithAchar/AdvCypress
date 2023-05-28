Feature: Bing Test Suite
    This feature file will validate search functionality

    Background: setupblock
        Given User is on Bing Search page

    @bing
    Scenario Outline: Search Validation
        It will validate the search functionality for the values defined in examples block

        When User searches the "<value>"
        Then Search result should be displayed as "<result>"

        Examples:
            | value   | result  |
            | cypress | cypress |