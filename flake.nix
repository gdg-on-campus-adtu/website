{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };
  outputs =
    { flake-parts, ... }@inputs:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "aarch64-darwin"
      ];
      perSystem =
        { pkgs, ... }:
        {
          devShells.default = pkgs.mkShellNoCC {
            name = "gdgoc-adtu";
            packages = [
              pkgs.nodejs-slim_24
              pkgs.pnpm
              pkgs.podman-compose
              pkgs.svelte-language-server
              pkgs.typescript-language-server
              pkgs.tailwindcss-language-server
              pkgs.vscode-css-languageserver
            ];
          };
        };
    };
}
