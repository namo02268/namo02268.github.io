using Documenter
makedocs(;
    sitename="Moto Nakagawa"
)

deploydocs(;
    devbranch="main",
    target="build",
    versions=nothing
)
