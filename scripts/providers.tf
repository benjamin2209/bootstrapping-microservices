# Initialises Terraform providers and sets their version numbers.

terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm",
      version = "=2.89.0"
    }
  }
}

provider "azurerm" {
  features {}
#  subscription_id = var.subscription_id
}