# Personal Website Content Plan

**Purpose:** Build a research-and-engineering portfolio that supports
graduate applications while also communicating industry impact. The site
should show a coherent trajectory: multimodal representation learning →
information retrieval and knowledge graphs → grounded LLM systems and
reliable agents.

The site has three main pages: **Home**, **Ideas**, and **Projects**.
Keep the distinction clear:

-   **Projects** = work already carried out. State your contribution,
    methods, evidence, and outcomes.
-   **Ideas** = research directions, technical proposals, and questions
    you are actively exploring. Label these as *proposed*,
    *exploratory*, or *work in progress*; do not imply they are
    completed research.
-   **Home** = a concise introduction and a curated route into the other
    two pages.

------------------------------------------------------------------------

# 1. Home

## 1.1 Hero section

**Suggested headline**

> Building grounded, reliable AI systems through retrieval, structured
> knowledge, and agentic workflows.

Alternative, more research-oriented:

> Researching how language models can reason reliably with structured
> knowledge, evidence, and tools.

**Short introduction**

I am a Data & Applied Scientist at Microsoft, working on knowledge- and
agent-based AI systems for enterprise workflows. My interests lie at the
intersection of information retrieval, knowledge representation, NLP,
and reliable LLM systems. I am particularly interested in how structured
knowledge and evidence-grounded retrieval can help language models
reason over complex, evolving information---and how agentic systems can
be made more predictable, evaluable, and useful.

Keep this to roughly 3--4 lines on the actual page.

## 1.2 Research interests

Use 4--5 concise topic labels, each with a one-sentence explanation:

-   **Knowledge Graphs & Representation Learning** --- Representing
    entities, relations, and evolving knowledge in ways that support
    retrieval and reasoning.
-   **Information Retrieval & RAG** --- Understanding when structured or
    hybrid retrieval offers advantages over flat vector search, and how
    retrieved evidence should be used.
-   **LLM Reasoning & Grounding** --- Improving the reliability of
    language-model reasoning through external evidence, structured
    context, and explicit constraints.
-   **Agentic Systems & Tool Use** --- Designing multi-step AI systems
    that coordinate tools and execute business processes predictably.
-   **Evaluation & Reliability** --- Measuring retrieval quality, answer
    quality, hallucination, and workflow-level correctness.

These should be presented as interests, not as claims of expertise in
every subfield.

## 1.3 Selected work

Feature 3--4 items linking to the Projects page:

1.  **Enterprise multi-agent workflow systems** --- Architecture and
    engineering for agents that interpret and execute business
    processes.
2.  **Knowledge graph completion and graph question answering** ---
    Research project using LLMs and graph representations.
3.  **Advanced visual question answering for remote sensing** ---
    Research on combining image and question representations.
4.  **Seller Copilot / enterprise RAG improvements** --- Retrieval,
    generation, and evaluation improvements in a production setting.

Use concise summaries and a clear tag such as `Industry`, `Research`, or
`Engineering`.

## 1.4 Selected ideas

Feature no more than 2--3 ideas on the home page:

-   **Meeting Knowledge Graphs for Evolving Decisions** --- Tracking how
    decisions, disagreements, and commitments change across
    conversations.
-   **When Does Graph Structure Help Beyond Vector Search?** ---
    Investigating when graph structure adds useful information to
    retrieval and reasoning.
-   **Reliable Execution in Enterprise Agents** --- Designing agent
    architectures that reduce unnecessary user interruptions and
    preserve deterministic execution.

## 1.5 About / background

Include a compact background paragraph:

I graduated with a B.Tech in Computer Science and Engineering from IIT
Bombay, where I worked on visual question answering and
knowledge-graph-related research. I now work on enterprise AI systems at
Microsoft, with a focus on knowledge graphs, retrieval, and agents.

Optional facts to include in a compact education line: - B.Tech,
Computer Science and Engineering, IIT Bombay - Teaching Assistant,
Implementation of Programming Languages Lab (if you want this to be
visible)

Do not make the homepage a full CV. Link to a downloadable résumé if
desired.

## 1.6 Links and contact

Include: - Email address - LinkedIn - GitHub (only if it contains work
you are comfortable making public) - Google Scholar (only if/when you
have a profile worth linking) - Résumé PDF

A simple footer is enough.

------------------------------------------------------------------------

# 2. Ideas

## Purpose and presentation

This page should demonstrate research taste and the ability to identify
meaningful technical problems---not present speculative ideas as
published results. Each idea should have:

1.  **Problem** --- What limitation or gap motivates it?
2.  **Why it matters** --- Who or what would benefit?
3.  **Current approaches** --- What do existing systems or papers do?
4.  **Open gap** --- What remains unresolved?
5.  **Proposed direction** --- What would you investigate or build?
6.  **Evaluation** --- How could the proposal be tested?
7.  **Status** --- `Exploring`, `Literature review`, `Prototype`, or
    `Proposed`.

Start with 3--4 substantial ideas. A smaller number of thoughtful,
technically grounded write-ups is stronger than a long list of one-line
concepts.

## Idea 1 --- Meeting Knowledge Graphs for Evolving Decisions and Commitments

**Suggested subtitle:** From meeting summaries to a provenance-aware
model of how decisions evolve.

**Status:** Exploratory research direction / literature review.

### Problem

Most meeting assistants focus on summarizing individual conversations or
extracting action items. But important organizational knowledge evolves
across meetings: a decision may be revised, challenged, deferred, or
superseded; an apparent agreement may conceal disagreement; an
unresolved issue may later become a commitment.

A static summary or a collection of isolated meeting notes does not
adequately represent these changes.

### Proposed direction

Explore a temporally aware, incrementally maintained meeting knowledge
graph that represents:

-   Decisions and their revisions
-   Agreements, disagreements, and unresolved questions
-   Action items, owners, deadlines, and dependencies
-   Commitments and the evidence supporting them
-   Links between a decision and the meetings or utterances that changed
    it
-   Whether an item is active, deferred, resolved, or superseded

The graph should preserve provenance and history rather than silently
overwrite earlier statements. It should distinguish an explicit decision
from a tentative suggestion or an inferred commitment.

### Research questions

-   How should implicit disagreement and partial agreement be
    represented?
-   How can a system distinguish a changed decision from a clarification
    of an existing one?
-   How can updates be made without destructive merges or loss of
    provenance?
-   How should the ontology adapt when teams use new concepts or
    terminology?
-   Can the graph answer cross-meeting questions more reliably than
    transcript search or conventional meeting summaries?

### Possible evaluation

Construct or curate multi-meeting scenarios with expert annotations for
decisions, revisions, disagreements, ownership, and unresolved items.
Evaluate extraction quality, temporal consistency, provenance coverage,
update correctness, and the accuracy of cross-meeting questions.

### Why this is interesting

The central challenge is not merely extracting facts from speech. It is
maintaining a faithful model of collective intent as that intent changes
over time.

**Potential first artifact:** A literature review and problem taxonomy
covering meeting knowledge graphs, decision tracking, temporal knowledge
representation, provenance, and cross-document reasoning.

------------------------------------------------------------------------

## Idea 2 --- When Does Graph Structure Actually Help Beyond Vector Search?

**Suggested subtitle:** Identifying the retrieval problems for which
structured relationships provide measurable value.

**Status:** Research question / literature synthesis.

### Problem

Knowledge-graph RAG is often presented as a more structured alternative
to conventional vector retrieval. But adding a graph does not
automatically improve retrieval or reasoning. For many questions,
semantic similarity search may be sufficient; for others, relationships,
constraints, and multi-hop connections may be essential.

### Proposed direction

Study the conditions under which graph structure contributes information
that a flat vector index cannot easily recover. Compare:

-   Dense vector retrieval
-   Sparse retrieval
-   Hybrid retrieval
-   Entity- and relation-aware retrieval
-   Graph traversal and multi-hop retrieval
-   Hybrid graph-and-vector retrieval

### Research questions

-   Which question types benefit most from explicit relations or
    multi-hop structure?
-   Does graph retrieval improve evidence completeness, answer
    correctness, or both?
-   When does graph expansion introduce noise?
-   How should systems choose between vector retrieval and graph
    traversal?
-   Can query structure or uncertainty guide retrieval strategy?

### Possible evaluation

Create a taxonomy of query types (for example, entity lookup,
relational, compositional, multi-hop, temporal, and constraint-based
questions). Compare retrieval approaches using evidence recall, context
relevance, answer correctness, and retrieval cost.

### Why this is interesting

It shifts the question from "Is graph RAG better?" to "For which
reasoning and retrieval problems does graph structure provide a real
advantage, and at what cost?"

**Potential first artifact:** A comparative research note that maps
papers by graph representation, retrieval strategy, LLM role, dataset,
metrics, reported gains, and limitations.

------------------------------------------------------------------------

## Idea 3 --- Reliable Enterprise Agents: Separating Reasoning from Execution

**Suggested subtitle:** How can agentic workflows remain flexible
without making execution unpredictable?

**Status:** Based on industry design exploration; publish only
non-confidential, generalized architecture insights.

### Problem

Enterprise workflows often combine ambiguous natural-language requests,
stateful processes, multiple tools, dependencies, and actions that must
happen in a controlled order. A fully autonomous agent may repeatedly
ask users for information or confirmation, while unconstrained planning
can make execution order difficult to predict.

### Proposed direction

Explore architectures that separate flexible language understanding from
controlled workflow execution:

-   Use models to interpret requests, identify relevant processes, and
    resolve genuinely ambiguous inputs.
-   Represent workflow state, dependencies, and required inputs
    explicitly.
-   Use deterministic orchestration for execution order where the
    process requires it.
-   Ask users for clarification only when a required piece of
    information is genuinely missing or ambiguous.
-   Validate tool outputs and state transitions before proceeding.
-   Evaluate the workflow as a whole, not only the quality of individual
    model responses.

### Research questions

-   Which decisions should be delegated to an LLM, and which should be
    enforced programmatically?
-   How can a system avoid repeated clarification or confirmation loops?
-   How should workflow state and dependencies be represented?
-   How can failures be detected, recovered from, and audited?
-   What evaluation measures capture end-to-end workflow reliability?

### Possible evaluation

Compare monolithic, delegated-planning, and orchestrated multi-agent
designs on representative stateful workflows. Measure task completion,
unnecessary user interruptions, execution-order violations, tool errors,
recovery success, and latency.

### Why this is interesting

The goal is not to eliminate model reasoning. It is to place model
reasoning inside an execution structure that preserves control,
predictability, and accountability.

**Potential first artifact:** A generalized architecture note based on
the design principles and experiments you can disclose from your
enterprise-agent work. Do not expose internal Microsoft architecture,
proprietary prompts, code, customer data, or confidential performance
details.

------------------------------------------------------------------------

## Idea 4 --- Structured Memory for Long-Horizon LLM Agents

**Suggested subtitle:** Moving beyond transcript recall toward explicit,
updateable memory.

**Status:** Exploratory direction.

### Problem

Long-running agents may need to remember decisions, preferences,
constraints, unresolved tasks, and relationships across many
interactions. Simply retrieving similar passages from a growing
conversation history can miss dependencies, contradictions, and changes
over time.

### Proposed direction

Investigate structured memory that combines entities, relations, events,
timestamps, provenance, and confidence. A memory system could maintain a
compact evolving representation while retaining links to the original
evidence.

### Research questions

-   What information should become persistent memory, and what should
    remain episodic context?
-   How should contradictory or superseded information be handled?
-   How can memory be updated without losing provenance?
-   When should an agent retrieve a graph neighborhood rather than a
    text passage?
-   How can memory quality be evaluated over long horizons?

### Possible evaluation

Test multi-session tasks that require remembering evolving constraints,
resolving contradictions, and connecting information from distant
interactions. Measure factual recall, update correctness, evidence
traceability, and task success.

### Why this is interesting

It connects knowledge representation with agent reliability: memory is
not just storing more context, but maintaining a usable and trustworthy
model of what is known.

------------------------------------------------------------------------

## Additional shorter research notes (optional)

These can become short technical essays after the main ideas are
developed:

-   **Evaluating RAG Beyond Answer Accuracy** --- Context relevance,
    evidence coverage, faithfulness, answer relevance, and failure
    attribution.
-   **Knowledge Graph Completion with LLMs** --- Where language models
    help with candidate generation, relation reasoning, or structured
    query generation, and where graph constraints remain important.
-   **Tool Retrieval for Multi-Agent Systems** --- How agents should
    discover and select from large tool collections without overloading
    prompts or selecting irrelevant tools.
-   **Programmatic Determinism in Agentic Systems** --- Why explicit
    control flow can remain valuable even as language models become
    stronger.
-   **Grounded Multimodal Reasoning** --- How visual evidence, textual
    questions, and structured representations can be combined for
    remote-sensing or other domain-specific VQA tasks.

------------------------------------------------------------------------

