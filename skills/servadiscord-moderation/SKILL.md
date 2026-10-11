---
name: servadiscord-moderation
description: Configure ServaDiscord moderation — warnings, auto-moderation rules, and escalating punishments such as timeout, kick or ban.
---

1. `list_nodes`. Update an existing `moderationModule` or add one.
2. `describe_node_type` for `moderationModule`.
3. Ask what the user wants to enforce (spam, links, bad words, raids) and how strict to be. Suggest a sensible escalation, for example 3 warnings → timeout, 5 warnings → kick.
4. State the final rules in plain English and get confirmation **before** enabling anything that kicks or bans.
5. `update_node` or `add_node`, then summarise the rules.
