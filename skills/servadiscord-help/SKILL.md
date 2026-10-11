---
name: servadiscord-help
description: List the available ServaDiscord node types and the plugin's skills so users can see what they can build.
---

1. Call `list_node_types`.
2. Present two groups, **Included** and **Premium** (`premium: true`): type name plus its description. Skip types where `addable` is false, except to mention that `generalSettings` is the always-present root.
3. List the plugin's skills: `/servadiscord-setup`, `/servadiscord-add`, `/servadiscord-show`, `/servadiscord-status`, `/servadiscord-welcome`, `/servadiscord-moderation`, `/servadiscord-tickets`, `/servadiscord-autoresponder`.
4. Ask: "What would you like to add or change?"
