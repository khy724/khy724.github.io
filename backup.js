researchInterests: [
    {
      title: "Knowledge Graphs & Representation Learning",
      description: "Representing entities, relations, and evolving knowledge in ways that support retrieval and reasoning.",
    },
    {
      title: "Information Retrieval & RAG",
      description: "Understanding when structured or hybrid retrieval improves on flat vector search and how models should use evidence.",
    },
    {
      title: "LLM Reasoning & Grounding",
      description: "Improving reliability through external evidence, structured context, and explicit constraints.",
    },
    {
      title: "Agentic Systems & Tool Use",
      description: "Designing multi-step systems that coordinate tools and execute business processes predictably.",
    },
    {
      title: "Evaluation & Reliability",
      description: "Measuring retrieval quality, hallucination, answer quality, and workflow-level correctness.",
    },
  ]

  interests: {
    center: "Grounded & reliable AI",
    branches: [
      {
        title: "Knowledge Graphs",
        color: "coral",
        items: ["Representation learning", "Evolving knowledge", "Graph reasoning"],
      },
      {
        title: "Retrieval & RAG",
        color: "gold",
        items: ["Hybrid retrieval", "Evidence use", "Multi-hop retrieval"],
      },
      {
        title: "LLM Grounding",
        color: "teal",
        items: ["Structured context", "Explicit constraints", "Faithful reasoning"],
      },
      {
        title: "Agents & Evaluation",
        color: "blue",
        items: ["Predictable tool use", "Workflow correctness", "Failure attribution"],
      },
    ],
  }

  articles: [
    {
      title: "Meeting Knowledge Graphs for Evolving Decisions",
      subtitle: "From meeting summaries to a provenance-aware model of how decisions evolve.",
      summary: "Explore a temporally aware knowledge graph that preserves decisions, revisions, disagreements, commitments, and the evidence behind each change.",
      problem: "Meeting assistants usually summarize isolated conversations, while organizational knowledge changes across meetings and static notes lose that history.",
      direction: "Model decisions, action items, ownership, dependencies, and status changes without destructively overwriting earlier statements.",
      evaluation: "Measure extraction quality, temporal consistency, provenance coverage, update correctness, and cross-meeting question answering.",
      type: "Exploratory research",
      date: "Literature review",
      url: "#",
    },
    {
      title: "When Does Graph Structure Help Beyond Vector Search?",
      subtitle: "Finding retrieval problems where structured relationships provide measurable value.",
      summary: "Compare dense, sparse, hybrid, entity-aware, and graph retrieval to identify when relations and multi-hop structure improve evidence and answers.",
      problem: "Knowledge-graph RAG is often assumed to outperform vector search, even though many questions may not benefit from explicit graph structure.",
      direction: "Build a query taxonomy and study how retrieval strategy should vary for relational, compositional, temporal, and constraint-based questions.",
      evaluation: "Compare evidence recall, context relevance, answer correctness, and retrieval cost across strategies.",
      type: "Research question",
      date: "Literature synthesis",
      url: "#",
    },
    {
      title: "Reliable Enterprise Agents",
      subtitle: "Separating flexible language understanding from controlled execution.",
      summary: "Investigate architectures that use models for interpretation while representing workflow state, dependencies, validation, and execution order explicitly.",
      problem: "Stateful enterprise workflows combine ambiguity, tools, dependencies, and controlled actions; unconstrained planning can make execution unpredictable.",
      direction: "Separate model reasoning from deterministic orchestration and request clarification only when required information is genuinely missing.",
      evaluation: "Measure completion, unnecessary interruptions, order violations, tool errors, recovery success, and latency.",
      type: "Industry design exploration",
      date: "Work in progress",
      url: "#",
    },
    {
      title: "Structured Memory for Long-Horizon Agents",
      subtitle: "Moving beyond transcript recall toward explicit, updateable memory.",
      summary: "Study memory that combines entities, relations, events, timestamps, provenance, and confidence while retaining links to original evidence.",
      problem: "Similarity search over growing conversation histories can miss dependencies, contradictions, and changes over time.",
      direction: "Maintain a compact, evolving representation that distinguishes persistent knowledge from episodic context and preserves superseded facts.",
      evaluation: "Test multi-session tasks for factual recall, update correctness, evidence traceability, and end-to-end task success.",
      type: "Exploratory direction",
      date: "Proposed",
      url: "#",
    },
  ]

  projects: [
    {
      title: "Enterprise Multi-Agent Workflow Systems",
      description: "Architecture and engineering for agents that interpret requests, coordinate tools, and execute stateful business processes with controlled orchestration.",
      status: "Industry",
      tags: ["Agents", "Tool Use", "Engineering"],
      url: "#",
      repository: "#",
    },
    {
      title: "Knowledge Graph Completion & Question Answering",
      description: "Research using language models and graph representations for knowledge graph completion, relational reasoning, and structured question answering.",
      status: "Research",
      tags: ["Knowledge Graphs", "LLMs", "NLP"],
      url: "#",
      repository: "#",
    },
    {
      title: "Advanced Visual Question Answering",
      description: "Research on combining image and question representations for grounded reasoning over remote-sensing imagery.",
      status: "Research",
      tags: ["Multimodal AI", "VQA", "Remote Sensing"],
      url: "#",
      repository: "#",
    },
    {
      title: "Enterprise RAG Improvements",
      description: "Retrieval, generation, and evaluation improvements for an enterprise copilot, focused on grounded answers and production reliability.",
      status: "Industry",
      tags: ["RAG", "Evaluation", "Retrieval"],
      url: "#",
      repository: "#",
    },
  ]