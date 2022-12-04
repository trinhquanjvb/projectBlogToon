const imgAccureateRip =
   'data:image/png;base64,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'

export default imgAccureateRip
